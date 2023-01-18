/*
  Warnings:

  - Added the required column `type` to the `Stage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stage" ADD COLUMN     "type" "StageType" NOT NULL;
