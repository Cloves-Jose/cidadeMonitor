import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword, IsEmpty } from "class-validator"
export class AuthLoginDto {

    @IsEmail()
    @IsEmpty()
    @ApiProperty({ example: 'email@gmail.com', description: "email cadastrado no sistema", required: true })
    email:string;

    @IsEmpty()
    @IsStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 3,
        minNumbers: 3,
        minSymbols: 3
    })
    @ApiProperty({ example: 'Ajgk840!@#', description: "senha cadastrada no sistema", required: true })
    password: string;
}