/*
  Warnings:

  - You are about to alter the column `km_rodado` on the `caminhao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `caminhao` MODIFY `km_rodado` INTEGER NOT NULL,
    MODIFY `marca` VARCHAR(191) NOT NULL;
