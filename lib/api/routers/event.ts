import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  /**
   * @summary GET ALL
   */
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.event.findMany({
      orderBy: {
        timeStart: "asc",
      },
      include: {
        location: true,
        performingArtist: true,
        performingGroup: true,
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
        timeStart: {
          gte: new Date(),
        },
      },
      orderBy: {
        timeStart: "asc",
      },
      include: {
        location: true,
        performingArtist: true,
        performingGroup: true,
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
          location: {
            include: {
              address: true,
            },
          },
          performingArtist: true,
          performingGroup: true,
          stage: true,
        },
      });
    }),
});
