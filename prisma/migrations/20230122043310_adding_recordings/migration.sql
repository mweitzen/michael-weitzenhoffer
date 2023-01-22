-- CreateTable
CREATE TABLE "Recording" (
    "id" TEXT NOT NULL,
    "storageUrl" TEXT NOT NULL,
    "storageId" TEXT NOT NULL,
    "storageFileName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "recordingArtist" TEXT NOT NULL,
    "recordingTitle" TEXT NOT NULL,

    CONSTRAINT "Recording_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recording_storageUrl_key" ON "Recording"("storageUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Recording_storageId_key" ON "Recording"("storageId");

-- AddForeignKey
ALTER TABLE "Recording" ADD CONSTRAINT "Recording_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
