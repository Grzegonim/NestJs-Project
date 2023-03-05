/*
  Warnings:

  - You are about to drop the column `address` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `client` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updateAt` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `address`,
    DROP COLUMN `client`,
    ADD COLUMN `clientId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `test`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
