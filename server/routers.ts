import { COOKIE_NAME } from "@shared/const";
import { CAMPUS_NAMES } from "@shared/campus";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
const sanitizeBaseUrl = (value: string | undefined): string | null => {
  if (!value) return null;
  const cleaned = value.trim().replace(/^['"]+|['"]+$/g, "").replace(/\/+$/, "");
  if (!cleaned) return null;

  try {
    new URL(cleaned);
    return cleaned;
  } catch {
    return null;
  }
};

const apiUrlFromEnv = sanitizeBaseUrl(process.env.VITE_API_URL ?? process.env.API_URL);
const API_URL = (apiUrlFromEnv ?? "http://localhost:3005").replace(/\/public$/i, "");

const PUBLIC_API_BASE = API_URL + "/public";
const DIRECIONAMENTOS_LOG_PREFIX = "[direcionamentos.submit]";

type CampusOption = {
  id: string;
  nome: string;
  campus?: string;
};

const FALLBACK_CAMPUS_OPTIONS: CampusOption[] = CAMPUS_NAMES.map((nome, index) => ({
  id: `fallback-campus-${index}`,
  nome,
  campus: nome,
}));

const toCampusOption = (
  raw: Record<string, unknown>,
  index: number
): CampusOption | null => {
  const nameCandidate =
    (typeof raw.nome === "string" && raw.nome.trim().length > 0 && raw.nome.trim()) ||
    (typeof raw.campus === "string" && raw.campus.trim().length > 0 && raw.campus.trim()) ||
    (typeof raw.name === "string" && raw.name.trim().length > 0 && raw.name.trim()) ||
    null;
  if (!nameCandidate) {
    return null;
  }

  let idValue: string;
  if (typeof raw.id === "string" && raw.id.trim().length > 0) {
    idValue = raw.id.trim();
  } else if (typeof raw.id === "number" && Number.isFinite(raw.id)) {
    idValue = raw.id.toString();
  } else if (
    typeof raw.campusId === "string" &&
    raw.campusId.trim().length > 0
  ) {
    idValue = raw.campusId.trim();
  } else {
    idValue = `campus-${index}-${nameCandidate.replace(/\s+/g, "-").toLowerCase()}`;
  }

  const campusName =
    (typeof raw.campus === "string" && raw.campus.trim().length > 0 && raw.campus.trim()) ||
    nameCandidate;

  return {
    id: idValue,
    nome: nameCandidate,
    campus: campusName,
  };
};

const normalizeCampusList = (data: unknown): CampusOption[] => {
  if (!Array.isArray(data)) {
    return FALLBACK_CAMPUS_OPTIONS;
  }

  const normalized = data
    .map((item, index) => {
      if (typeof item !== "object" || item === null) return null;
      return toCampusOption(item as Record<string, unknown>, index);
    })
    .filter((item): item is CampusOption => Boolean(item));

  return normalized.length > 0 ? normalized : FALLBACK_CAMPUS_OPTIONS;
};


export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  direcionamentos: router({
    atualizarStatus: publicProcedure
      .input(
        z.object({
          id: z.string().min(1),
          status: z.enum([
            "CONTATO_LIDER_SEM_RETORNO",
            "EM_CONSOLIDACAO",
            "CONSOLIDACAO_INTERROMPIDA",
            "CONSOLIDADO_CELULA",
          ]),
          motivo: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const response = await fetch(
          `${PUBLIC_API_BASE}/direcionamentos/${input.id}/status`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: input.status, motivo: input.motivo }),
          }
        );

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            (data as any)?.message ||
            (data as any)?.erro ||
            `Erro ao atualizar status (${response.status})`
          );
        }

        return data;
      }),

    buscarPendentes: publicProcedure
      .input(
        z.object({
          id: z.string().optional(),
          nome: z.string().optional(),
          whatsapp: z.string().optional(),
        })
      )
      .query(async ({ input }) => {
        const params = new URLSearchParams();
        if (input.id) params.set("id", input.id);
        if (input.nome) params.set("nome", input.nome);
        if (input.whatsapp) params.set("whatsapp", input.whatsapp);

        const response = await fetch(
          `${PUBLIC_API_BASE}/direcionamentos/pendentes?${params.toString()}`,
          { headers: { "Content-Type": "application/json" } }
        );

        const data = await response.json().catch(() => []);

        if (!response.ok) {
          throw new Error(
            (data as any)?.message ||
            (data as any)?.erro ||
            `Erro ao buscar direcionamentos (${response.status})`
          );
        }

        const allItems: any[] = Array.isArray(data) ? data : data ? [data] : [];

        // Deduplicate: keep only the latest status per whatsapp
        const latestByWhatsapp = new Map<string, any>();
        for (const item of allItems) {
          const key = item.whatsapp ?? item.id;
          const existing = latestByWhatsapp.get(key);
          if (!existing) {
            latestByWhatsapp.set(key, item);
          } else {
            const existingTs = new Date(existing.updatedAt || existing.createdAt || 0).getTime();
            const itemTs     = new Date(item.updatedAt    || item.createdAt    || 0).getTime();
            if (itemTs > existingTs) latestByWhatsapp.set(key, item);
          }
        }

        return Array.from(latestByWhatsapp.values());
      }),

    submit: publicProcedure
      .input(
        z.object({
          nome: z.string(),
          decisao: z.string(),
          whatsapp: z.string(),
          rede: z.string(),
          cep_apelo: z.string().optional(),
          bairro_apelo: z.string().optional(),
          cidade_apelo: z.string().optional(),
          estado_apelo: z.string().optional(),
          idade: z.number(),
          bairro_proximo: z.array(z.string()),
          dias_semana: z.array(z.string()).default([]),
          direcionar_celula: z.boolean(),
          observacao: z.string().optional(),
          campus_iecg: z.string(),
          status: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const requestId = `dir-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const startedAt = Date.now();

        const cepApelo = (input.cep_apelo || "").replace(/\D/g, "");
        const bairroApelo = (input.bairro_apelo || "").trim();

        if (input.direcionar_celula) {
          if (cepApelo.length !== 8) {
            throw new Error("CEP inválido para encaminhamento");
          }
          if (!bairroApelo) {
            throw new Error("Bairro é obrigatório para encaminhamento");
          }
        }

        console.log(`${DIRECIONAMENTOS_LOG_PREFIX} [${requestId}] payload recebido`, {
          nome: input.nome,
          decisao: input.decisao,
          rede: input.rede,
          idade: input.idade,
          direcionar_celula: input.direcionar_celula,
          campus_iecg: input.campus_iecg,
          status: input.status,
          possui_cep_apelo: Boolean(input.cep_apelo),
          cep_apelo: cepApelo,
          bairro_apelo: bairroApelo,
          bairros_proximos_qtd: input.bairro_proximo.length,
          dias_semana_qtd: input.dias_semana.length,
          cidade_apelo: input.cidade_apelo,
          estado_apelo: input.estado_apelo,
        });

        try {
          const endpoint = `${PUBLIC_API_BASE}/direcionamentos`;
          console.log(`${DIRECIONAMENTOS_LOG_PREFIX} [${requestId}] enviando para API`, {
            endpoint,
          });

          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          });

          const responseText = await response.text();
          let responseData: unknown = null;
          if (responseText.trim().length > 0) {
            try {
              responseData = JSON.parse(responseText);
            } catch {
              responseData = responseText;
            }
          }

          console.log(`${DIRECIONAMENTOS_LOG_PREFIX} [${requestId}] resposta da API`, {
            status: response.status,
            ok: response.ok,
            duracao_ms: Date.now() - startedAt,
          });

          if (!response.ok) {
            console.error(`${DIRECIONAMENTOS_LOG_PREFIX} [${requestId}] erro retornado`, {
              status: response.status,
              body: responseData,
            });
            const errorData =
              responseData && typeof responseData === "object"
                ? (responseData as Record<string, unknown>)
                : {};
            const errorText =
              typeof responseData === "string" && responseData.trim().length > 0
                ? responseData
                : null;
            throw new Error(
              (typeof errorData.erro === "string" && errorData.erro) ||
                (typeof errorData.message === "string" && errorData.message) ||
                errorText ||
                "Erro ao enviar o apelo."
            );
          }

          console.log(`${DIRECIONAMENTOS_LOG_PREFIX} [${requestId}] envio concluido`);
          return { success: true, data: responseData };
        } catch (error: any) {
          console.error(`${DIRECIONAMENTOS_LOG_PREFIX} [${requestId}] falha`, error);
          throw new Error(error.message || "Erro ao enviar o apelo.");
        }
      }),
  }),

  celulas: router({
    criar: publicProcedure
      .input(
        z.object({
          celula: z.string().min(1),
          rede: z.string().optional(),
          lider: z.string().optional(),
          email_lider: z.string().optional(),
          cel_lider: z.string().optional(),
          anfitriao: z.string().optional(),
          campus: z.string().optional(),
          campusId: z.string().optional(),
          numero: z.string().optional(),
          endereco: z.string().optional(),
          cep: z.string().optional(),
          bairro: z.string().optional(),
          cidade: z.string().optional(),
          estado: z.string().optional(),
          lideranca: z.string().optional(),
          pastor_geracao: z.string().optional(),
          pastor_campus: z.string().optional(),
          dia: z.string().optional(),
          lat: z.number().nullable().optional(),
          lon: z.number().nullable().optional(),
        })
      )
      .mutation(async ({ input }) => {
        console.log("Criando célula - payload:", JSON.stringify(input));
        try {
          const headers: Record<string, string> = {
            "Content-Type": "application/json",
          };
          
          const response = await fetch(`${PUBLIC_API_BASE}/celulas`, {
            method: "POST",
            headers,
            body: JSON.stringify(input),
          });

          console.log("Criando célula - status:", response.status);

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
              errorData?.erro ||
                errorData?.message ||
                `Erro ao criar célula (${response.status})`
            );
          }

          const data = await response.json();
          console.log("Criar célula - resposta:", data);
          return { success: true, data };
        } catch (error: any) {
          console.error("Erro ao criar célula:", error);
          throw new Error(error.message || "Erro ao criar célula.");
        }
      }),
    listarCampi: publicProcedure.query(async () => {
      try {
        const response = await fetch(`${PUBLIC_API_BASE}/campus`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.warn(
            "Falha ao carregar campus do portal externo:",
            response.status,
            errorData
          );
          return FALLBACK_CAMPUS_OPTIONS;
        }

        const data = await response.json().catch(() => []);
        return normalizeCampusList(data);
      } catch (error: any) {
        console.error("Erro ao carregar campus:", error);
        return FALLBACK_CAMPUS_OPTIONS;
      }
    }),
    buscarPorContato: publicProcedure
      .input(
        z.object({
          contato: z.string().min(3, "Contato é obrigatório"),
        })
      )
      .query(async ({ input }) => {
        const url = `${PUBLIC_API_BASE}/celulas/contato?contato=${encodeURIComponent(
          input.contato
        )}`;
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
            },
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
              errorData?.erro ||
                errorData?.message ||
                `Erro ao buscar célula (${response.status})`
            );
          }

          const data = await response.json();
          return { success: true, data };
        } catch (error: any) {
          console.error("Erro ao buscar célula:", error);
          throw new Error(error.message || "Erro ao buscar célula.");
        }
      }),

    atualizar: publicProcedure
      .input(
        z.object({
          id: z.string().min(1, "Id é obrigatório"),
          dados: z.any(),
        })
      )
    .mutation(async ({ input }) => {
        console.log("Atualizando célula -> id:", input.id, "payload:", JSON.stringify(input.dados));
        try {
          const response = await fetch(
            `${PUBLIC_API_BASE}/celulas/${input.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(input.dados),
            }
          );

          console.log("Atualizando célula - status:", response.status);

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
              errorData?.erro ||
                errorData?.message ||
                `Erro ao atualizar célula (${response.status})`
            );
          }

          const data = await response.json();
          console.log("Atualizar célula - resposta:", data);
          return { success: true, data };
        } catch (error: any) {
          console.error("Erro ao atualizar célula:", error);
          throw new Error(error.message || "Erro ao atualizar célula.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
