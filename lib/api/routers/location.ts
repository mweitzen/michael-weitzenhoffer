import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const locationRouter = createTRPCRouter({
  /**
   * @summary GET ALL
   */
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.location.findMany({
      include: {
        stages: true,
      },
    });
  }),
});
