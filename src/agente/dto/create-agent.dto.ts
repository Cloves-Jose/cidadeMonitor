import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail } from "class-validator"
export class CreateAgentDto {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'José Pedro', description: 'Adicionar o nome do agente que será cadastrado' })
    name: string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty({ example: 'jose.pedro@gmail.com', description: 'E-mail do agente que será cadastrado' })
    email: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'Ajgo940!@#', description: 'Senha com no mínimo 8 caracteres' })
    password: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'f0664e9f-b49a-4c5a-93ed-624c7deb02f2', description: 'Id da permissão do agente que será cadastrado' })
    permission: string

}