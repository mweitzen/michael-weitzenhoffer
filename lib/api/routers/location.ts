import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const locationRouter = createTRPCRouter({
  /**
   * @summary GET ALL
   */
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.location.findMany({
      include: {
        address: {
          include: {
            street: {
              include: {
                city: {
                  include: {
                    county: {
                      include: {
                        state: true,
                      },
                    },
                  },
                },
                neighborhood: {
                  include: {
                    city: true,
                  },
                },
              },
            },
            zipcode: true,
          },
        },
      },
    });
  }),
});
