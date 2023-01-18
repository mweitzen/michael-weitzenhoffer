// import events from "./seed-data/events";
// import locations from "./seed-data/locations";
// import artists from "./seed-data/artists";
import songs1 from "./seed-data/songs-1";
import songs2 from "./seed-data/songs-2";
import songs3 from "./seed-data/songs-3";
import songs4 from "./seed-data/songs-4";

//
import { PrismaClient, StageType, LocationType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.artist.createMany({
  //   data: artists,
  //   skipDuplicates: true,
  // });
  // songs1.forEach(async (song) => {
  //   const result = await prisma.song.create({
  //     data: song,
  //   });
  //   console.log(result);
  // });
  // songs2.forEach(async (song) => {
  //   const result = await prisma.song.create({
  //     data: song,
  //   });
  //   console.log(result);
  // });
  // songs3.forEach(async (song) => {
  //   const result = await prisma.song.create({
  //     data: song,
  //   });
  //   console.log(result);
  // });
  // songs4.forEach(async (song) => {
  //   const result = await prisma.song.create({
  //     data: song,
  //   });
  //   console.log(result);
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
