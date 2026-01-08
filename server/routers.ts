import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

const PUBLIC_API_BASE = "https://portal.iecg.com.br/public";
const START_API_BASE = "https://portal.iecg.com.br/start";

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
    submit: publicProcedure
      .input(
        z.object({
          nome: z.string(),
          decisao: z.string(),
          whatsapp: z.string(),
          rede: z.string(),
          bairro_apelo: z.string(),
          cidade_apelo: z.string(),
          estado_apelo: z.string(),
          idade: z.number(),
          bairro_proximo: z.array(z.string()),
          direcionar_celula: z.boolean(),
          observacao: z.string().optional(),
          campus_iecg: z.string(),
          status: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const response = await fetch(`${PUBLIC_API_BASE}/direcionamentos`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
              errorData?.erro || errorData?.message || "Erro ao enviar o apelo."
            );
          }

          const data = await response.json();
          return { success: true, data };
        } catch (error: any) {
          console.error("Erro ao enviar direcionamento:", error);
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
        try {
          const headers: Record<string, string> = {
            "Content-Type": "application/json",
          };
          
          const response = await fetch(`${PUBLIC_API_BASE}/celula`, {
            method: "POST",
            headers,
            body: JSON.stringify(input),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
              errorData?.erro ||
                errorData?.message ||
                `Erro ao criar célula (${response.status})`
            );
          }

          const data = await response.json();
          return { success: true, data };
        } catch (error: any) {
          console.error("Erro ao criar célula:", error);
          throw new Error(error.message || "Erro ao criar célula.");
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

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
              errorData?.erro ||
                errorData?.message ||
                `Erro ao atualizar célula (${response.status})`
            );
          }

          const data = await response.json();
          return { success: true, data };
        } catch (error: any) {
          console.error("Erro ao atualizar célula:", error);
          throw new Error(error.message || "Erro ao atualizar célula.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
