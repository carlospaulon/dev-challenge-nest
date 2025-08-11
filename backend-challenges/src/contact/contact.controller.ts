import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactService } from './contact.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Post('create_contact')
    @HttpCode(200)
    @ApiOperation({ summary: 'Cria um novo contato' })
    @ApiResponse({
        status: 200,
        description: 'Contato criado com sucesso',
        schema: {
            example: {
                confirmation: 'Thank you João Silva, for getting in touch! We will get back to you shortly.',
            }
        }
    })
    async create(@Body() createContactDto: CreateContactDto) {
        return this.contactService.createContact(createContactDto);
    }

    @Get('contacts')
    @ApiOperation({ summary: 'Lista todos os contatos criados' })
    @ApiResponse({
        status: 200,
        description: 'Lista de contatos',
        type: [CreateContactDto],
    })
    async findAll() {
        return this.contactService.findAll();
    }
}
