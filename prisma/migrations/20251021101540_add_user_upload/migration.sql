-- CreateTable
CREATE TABLE "user_upload" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_upload_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_upload" ADD CONSTRAINT "user_upload_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
