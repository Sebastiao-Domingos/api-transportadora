/*
  Warnings:

  - You are about to alter the column `kilometragem` on the `viagem` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `viagem` MODIFY `kilometragem` INTEGER NOT NULL;
