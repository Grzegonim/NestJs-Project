/*
  Warnings:

  - You are about to drop the column `adrress` on the `client` table. All the data in the column will be lost.
  - Added the required column `address` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_clientId_fkey`;

-- AlterTable
ALTER TABLE `client` DROP COLUMN `adrress`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `order` MODIFY `clientId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
