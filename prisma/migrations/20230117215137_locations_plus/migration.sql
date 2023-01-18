/*
  Warnings:

  - The values [STAGE,ROOM] on the enum `LocationType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `hostId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StageType" AS ENUM ('STAGE', 'ROOM');

-- AlterEnum
BEGIN;
CREATE TYPE "LocationType_new" AS ENUM ('RESTAURANT', 'BAR', 'CLUB', 'THEATER', 'VENUE', 'COMPLEX');
ALTER TABLE "Location" ALTER COLUMN "type" TYPE "LocationType_new" USING ("type"::text::"LocationType_new");
ALTER TYPE "LocationType" RENAME TO "LocationType_old";
ALTER TYPE "LocationType_new" RENAME TO "LocationType";
DROP TYPE "LocationType_old";
COMMIT;

-- DropIndex
DROP INDEX "Location_name_key";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "hostId" TEXT NOT NULL,
ADD COLUMN     "stageId" TEXT;

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "website" TEXT;

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "streetNumber" TEXT NOT NULL,
    "streetId" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "zipCodeId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZipCode" (
    "id" TEXT NOT NULL,
    "code" INTEGER NOT NULL,

    CONSTRAINT "ZipCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Street" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "neighborhoodId" TEXT,
    "cityId" TEXT NOT NULL,

    CONSTRAINT "Street_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Neighborhood" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,

    CONSTRAINT "Neighborhood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "countyId" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "County" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stateId" TEXT NOT NULL,

    CONSTRAINT "County_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "locationId" TEXT NOT NULL,

    CONSTRAINT "Stage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Host" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Host_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "Street"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_zipCodeId_fkey" FOREIGN KEY ("zipCodeId") REFERENCES "ZipCode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Street" ADD CONSTRAINT "Street_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "Neighborhood"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Street" ADD CONSTRAINT "Street_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Neighborhood" ADD CONSTRAINT "Neighborhood_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_countyId_fkey" FOREIGN KEY ("countyId") REFERENCES "County"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "County" ADD CONSTRAINT "County_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
