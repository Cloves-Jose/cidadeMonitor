import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AgenteService {

    private date = new Date()

    constructor(private readonly prisma: PrismaService) {}

    async findOne(email: string) {
        try {
            return await this.prisma.tb_agente.findFirst({
                where: {
                    email: email,
                    deleted_at: null
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    password: true,
                    permission: true,
                    created_at: true,
                    updated_at: true,
                    deleted_at: true
                }
            })
        } catch(error) {
            console.log("Erro ao buscar por agente: ", error);
            throw new Error("Erro ao buscar por agente");
        }
    }

    async createAgent({ name, email, password, permission }: CreateAgentDto) {
        try {
            const saltOrRounds = 10
            const hash = await bcrypt.hash(password, saltOrRounds)
    
            return await this.prisma.tb_agente.create({
                data: {
                    name: name,
                    email: email,
                    password: hash,
                    permission: permission
                },
                select: {
                    name: true,
                    email: true,
                    permission: true,
                    created_at: true
                }
            })

        } catch(error) {
            console.log("Erro durante a criação do agente", error)
            throw new Error("Erro durante a criação do agente")
        }

    }


}
