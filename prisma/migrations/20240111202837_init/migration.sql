-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `caminhao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `ano_fabricacao` DATETIME(3) NOT NULL,
    `km_rodado` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enderenco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bairro` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `motorista_id` INTEGER NOT NULL,

    INDEX `Enderenco_motorista_id_fkey`(`motorista_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motorista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `numero_carta_conducao` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pneu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(191) NOT NULL,
    `durancao` INTEGER NOT NULL,
    `caminhao_id` INTEGER NOT NULL,

    INDEX `Pneu_caminhao_id_fkey`(`caminhao_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `enderenco` ADD CONSTRAINT `Enderenco_motorista_id_fkey` FOREIGN KEY (`motorista_id`) REFERENCES `motorista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pneu` ADD CONSTRAINT `Pneu_caminhao_id_fkey` FOREIGN KEY (`caminhao_id`) REFERENCES `caminhao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
