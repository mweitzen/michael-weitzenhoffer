import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  /**
   * @summary GET ALL
   */
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.event.findMany({
      orderBy: {
        time_start: "asc",
      },
      include: {
        location: true,
        performing_artist: true,
        performing_group: true,
        stage: true,
      },
    });
  }),

  /**
   * @summary GET UPCOMING EVENTS
   */
  getUpcoming: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.event.findMany({
      where: {
        time_start: {
          gte: new Date(),
        },
      },
      orderBy: {
        time_start: "asc",
      },
      include: {
        location: true,
        performing_artist: true,
        performing_group: true,
        stage: true,
      },
    });
  }),

  /**
   * @summary GET BY ID
   */
  getById: publicProcedure
    .input(z.object({ eventId: z.string() }))
    .query(({ ctx, input }) => {
      if (input.eventId === "stall") return null;

      return ctx.prisma.event.findUnique({
        where: {
          id: input.eventId,
        },
        include: {
          location: true,
          performing_artist: true,
          performing_group: true,
          stage: true,
        },
      });
    }),
});
