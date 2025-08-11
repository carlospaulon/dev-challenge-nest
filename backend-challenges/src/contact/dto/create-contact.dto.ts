import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";


export class CreateContactDto {
    @ApiProperty({ example: 'João Silva', description: 'Nome do contato' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nome: string;

    @ApiProperty({ example: 'joao@example.com', description: 'Email válido' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'Gostaria de saber mais sobre seus serviços.' })
    @IsString()
    @MaxLength(500)
    message: string;

    @ApiProperty({ example: 'Interesse em contratação', description: 'Área de interesse do contato' })
    @IsString()
    interest: string;
}