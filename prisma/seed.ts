// import events from "./seed-data/events";
// import locations from "./seed-data/locations";
// import events from "./seed-data/events";
//
import { PrismaClient, StageType, LocationType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
