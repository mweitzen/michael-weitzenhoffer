import { createTRPCRouter } from "./trpc";
//
import { userRouter } from "./routers/user";
import { eventRouter } from "./routers/event";
import { locationRouter } from "./routers/location";
import { songRouter } from "./routers/songs";
import { recordingRouter } from "./routers/recordings";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  users: userRouter,
  events: eventRouter,
  locations: locationRouter,
  songs: songRouter,
  recordings: recordingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
