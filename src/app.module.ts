import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgenteService } from './agente/agente.service';
import { AgenteModule } from './agente/agente.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { AppLoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [AgenteModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AgenteService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppLoggerMiddleware)
      .forRoutes('*');
  }
}
