import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

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
          const response = await fetch(
            "https://portal.iecg.com.br/public/direcionamentos",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(input),
            }
          );

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
});

export type AppRouter = typeof appRouter;
