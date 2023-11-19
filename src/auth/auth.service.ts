import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AgenteService } from '../agente/agente.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private agentService: AgenteService,
        private jwtService: JwtService
        ) {}

    async generateToken(id: string, permission: string) {
        const payload = { sub: id, permission: permission }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

    async singIn(email: string, pass: string): Promise<any> {
        const agent = await this.agentService.findOneByEmail(email);

        const isMatch = await bcrypt.compare(pass, agent.password)

        if (isMatch == false) {
            throw new UnauthorizedException('E-mail e/ou senha incorretos.');
        }

        let result = await this.generateToken(agent.id, agent.permission)

        return result
    }

    async checkToken(token: string) {
        return this.jwtService.verifyAsync(token)
    }
}
