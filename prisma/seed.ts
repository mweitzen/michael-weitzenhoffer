import locations from "./seed-data/locations";
import stages from "./seed-data/stages";
import events from "./seed-data/events";
import artists from "./seed-data/artists";
import songs1 from "./seed-data/songs-1";
import songs2 from "./seed-data/songs-2";
import songs3 from "./seed-data/songs-3";
import songs4 from "./seed-data/songs-4";
//
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.city.create({
  //   data: {
  //     name: "Albuquerque",
  //     county: {
  //       create: {
  //         name: "Bernalillo",
  //         state: {
  //           create: {
  //             name: "New Mexico",
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  // await prisma.address.create({
  //   data: {
  //     streetNumber: "6855",
  //     complete: "6855 4th St NW, Los Ranchos, Albuquerque, New Mexico 87107",
  //     street: {
  //       create: {
  //         name: "4th St NW",
  //         neighborhood: {
  //           create: {
  //             name: "Los Ranchos",
  //             cityId: "cld6pijg100009kffht9tus22",
  //           },
  //         },
  //         city: {
  //           connect: {
  //             id: "cld6pijg100009kffht9tus22",
  //           },
  //         },
  //       },
  //     },
  //     zipcode: {
  //       create: {
  //         code: 87107,
  //       },
  //     },
  //     locations: {
  //       createMany: {
  //         data: locations,
  //       },
  //     },
  //   },
  // });
  // await prisma.stage.createMany({
  //   data: stages,
  // });
  // await prisma.event.createMany({
  //   data: events,
  // });
  // const result = await prisma.artist.createMany({
  //   data: artists,
  // });
  // songs1.forEach(async (song) => {
  //   const result = await prisma.song.create({
  //     data: song,
  //   });
  // });
  // songs2.forEach(async (song) => {
  //   const result = await prisma.song.create({
  //     data: song,
  //   });
  // });
  // songs3.forEach(async (song) => {
  //   const result = await prisma.song.create({
  //     data: song,
  //   });
  // });
  // songs4.forEach(async (song) => {
  //   const result = await prisma.song.create({
  //     data: song,
  //   });
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
