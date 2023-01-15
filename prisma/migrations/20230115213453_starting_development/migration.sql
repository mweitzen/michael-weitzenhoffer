-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('RESTAURANT', 'BAR', 'CLUB', 'STAGE', 'THEATER', 'VENUE', 'ROOM');

-- CreateEnum
CREATE TYPE "MusicalRoot" AS ENUM ('A', 'B_FLAT', 'B', 'C', 'D_FLAT_C_SHARP', 'D', 'E_FLAT', 'E', 'F', 'G_FLAT_F_SHARP', 'G', 'A_FLAT_G_SHARP');

-- CreateEnum
CREATE TYPE "MusicalMode" AS ENUM ('MAJOR', 'DORIAN', 'PHRYGIAN', 'LYDIAN', 'MIXOLYDIAN', 'MINOR', 'LOCRIAN');

-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('POP_ROCK_RB', 'JAZZ', 'STANDARD', 'BLUES', 'CLASSICAL', 'BOSSA_NOVA', 'MUSICAL_THEATER', 'MISCELLANEOUS');

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "timeStart" TIMESTAMP(3),
    "timeEnd" TIMESTAMP(3),
    "locationId" TEXT NOT NULL,
    "performingArtistId" TEXT,
    "performingGroupId" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "insideOfId" TEXT,
    "type" "LocationType" NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongListSongs" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "groupId" TEXT,
    "songId" TEXT NOT NULL,
    "modulated" BOOLEAN NOT NULL DEFAULT false,
    "performanceRoot" "MusicalRoot",
    "performanceNotes" TEXT,

    CONSTRAINT "SongListSongs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Song" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "genre" "Genre" NOT NULL,
    "root" "MusicalRoot" NOT NULL,
    "mode" "MusicalMode" NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GroupToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GroupToSong" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_SongToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToUser_AB_unique" ON "_GroupToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToUser_B_index" ON "_GroupToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToSong_AB_unique" ON "_GroupToSong"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToSong_B_index" ON "_GroupToSong"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SongToUser_AB_unique" ON "_SongToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SongToUser_B_index" ON "_SongToUser"("B");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_performingArtistId_fkey" FOREIGN KEY ("performingArtistId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_performingGroupId_fkey" FOREIGN KEY ("performingGroupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_insideOfId_fkey" FOREIGN KEY ("insideOfId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongListSongs" ADD CONSTRAINT "SongListSongs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongListSongs" ADD CONSTRAINT "SongListSongs_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongListSongs" ADD CONSTRAINT "SongListSongs_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToUser" ADD CONSTRAINT "_GroupToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToUser" ADD CONSTRAINT "_GroupToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToSong" ADD CONSTRAINT "_GroupToSong_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToSong" ADD CONSTRAINT "_GroupToSong_B_fkey" FOREIGN KEY ("B") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SongToUser" ADD CONSTRAINT "_SongToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SongToUser" ADD CONSTRAINT "_SongToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
