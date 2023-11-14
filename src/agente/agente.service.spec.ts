import { Test, TestingModule } from '@nestjs/testing';
import { AgenteService } from './agente.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AgenteService', () => {
  let service: AgenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgenteService, PrismaService],
    }).compile();

    service = module.get<AgenteService>(AgenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
