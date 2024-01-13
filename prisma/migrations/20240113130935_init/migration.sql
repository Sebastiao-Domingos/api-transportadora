-- CreateTable
CREATE TABLE `viagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `origem` VARCHAR(191) NOT NULL,
    `destino` VARCHAR(191) NOT NULL,
    `kilometragem` VARCHAR(191) NOT NULL,
    `data_inicio` VARCHAR(191) NOT NULL,
    `data_fim` VARCHAR(191) NOT NULL,
    `caminhao_id` INTEGER NOT NULL,
    `motorista_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `viagem_caminhao_id_fkey` FOREIGN KEY (`caminhao_id`) REFERENCES `caminhao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `viagem_motorista_id_fkey` FOREIGN KEY (`motorista_id`) REFERENCES `motorista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
