/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `workspace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `workspace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "workspace" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "workspace_slug_key" ON "workspace"("slug");
