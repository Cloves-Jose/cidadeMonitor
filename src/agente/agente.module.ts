import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AgenteService } from './agente.service';
import { AgenteController } from './agente.controller';

@Module({
    imports: [PrismaModule],
    providers: [AgenteService],
    exports: [AgenteService],
    controllers: [AgenteController]
})
export class AgenteModule {}
