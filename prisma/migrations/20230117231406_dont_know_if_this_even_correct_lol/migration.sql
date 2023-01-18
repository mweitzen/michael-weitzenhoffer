/*
  Warnings:

  - You are about to drop the column `hostId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `Host` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_hostId_fkey";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "complete" TEXT;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "hostId",
ADD COLUMN     "details" TEXT,
ADD COLUMN     "requiresReservation" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "requiresTicket" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "rsvpLink" TEXT;

-- DropTable
DROP TABLE "Host";
