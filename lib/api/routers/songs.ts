import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const songRouter = createTRPCRouter({
  /**
   * @summary GET ALL
   */
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.song.findMany({
      orderBy: {
        artist: {
          name: "asc",
        },
      },
      include: {
        artist: true,
      },
    });
  }),
});
