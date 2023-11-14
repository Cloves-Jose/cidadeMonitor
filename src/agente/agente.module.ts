import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AgenteService } from './agente.service';

@Module({
    imports: [PrismaModule],
    providers: [AgenteService],
    exports: [AgenteService],
    controllers: []
})
export class AgenteModule {}
