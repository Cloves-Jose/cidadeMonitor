-- CreateTable
CREATE TABLE "tb_genero" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "tb_genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_nivel_ameaca" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "tb_nivel_ameaca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_permissao" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "tb_permissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_agente" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "permission" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "tb_agente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_categoria" (
    "id" TEXT NOT NULL,
    "agente_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "tb_categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_ameaca" (
    "id" TEXT NOT NULL,
    "agent_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "categoria_id" TEXT NOT NULL,
    "nivel_ameaca_id" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "tb_ameaca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_cliente" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "date_birth" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "tb_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_chamado" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "ameaca_id" TEXT NOT NULL,
    "cliente_id" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "tb_chamado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_agente" ADD CONSTRAINT "tb_agente_permission_fkey" FOREIGN KEY ("permission") REFERENCES "tb_permissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_categoria" ADD CONSTRAINT "tb_categoria_agente_id_fkey" FOREIGN KEY ("agente_id") REFERENCES "tb_agente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_ameaca" ADD CONSTRAINT "tb_ameaca_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "tb_agente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_ameaca" ADD CONSTRAINT "tb_ameaca_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "tb_categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_ameaca" ADD CONSTRAINT "tb_ameaca_nivel_ameaca_id_fkey" FOREIGN KEY ("nivel_ameaca_id") REFERENCES "tb_nivel_ameaca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_cliente" ADD CONSTRAINT "tb_cliente_gender_fkey" FOREIGN KEY ("gender") REFERENCES "tb_genero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_chamado" ADD CONSTRAINT "tb_chamado_ameaca_id_fkey" FOREIGN KEY ("ameaca_id") REFERENCES "tb_ameaca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_chamado" ADD CONSTRAINT "tb_chamado_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "tb_cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
