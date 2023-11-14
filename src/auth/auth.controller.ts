import { Controller, Body, Post, HttpCode, HttpStatus, Request, UseGuards, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AgenteService } from '../agente/agente.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private agentService: AgenteService) {}

    @ApiOperation({ summary: 'Efetuar login na plataforma web' })
    @ApiResponse({ status: 200, description: 'Success.' })
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() { email, password }: AuthLoginDto) {
        return this.authService.singIn(email, password)
    }

    @ApiOperation({ summary: 'Pega informações a partir do token do cliente' })
    @ApiResponse({ status: 200, description: 'Success.'})
    @UseGuards(AuthGuard)
    @Post('/me')
    getProfile(@Body() { token }) {
        return this.authService.checkToken(token)
    }

    @ApiOperation({ summary: 'Realiza o cadastro de um novo agente' })
    @ApiResponse({ status: 200, description: 'Success.' })
    @UseGuards(AuthGuard)
    @Post('/create')
    async register(@Body() { name, email, password, permission }: AuthRegisterDto) {
        return this.agentService.createAgent({ name, email, password, permission })
    }


}
