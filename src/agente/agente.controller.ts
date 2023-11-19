import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgenteService } from './agente.service';

@ApiTags('agente')
@Controller('agente')
export class AgenteController {
    constructor(private agenteService: AgenteService) {}
}
