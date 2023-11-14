import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AgenteModule } from '../agente/agente.module';
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    forwardRef(() => AgenteModule),
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10h' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
