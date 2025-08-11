import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {

    private contacts: CreateContactDto[] = [];

    async createContact(createContactDto: CreateContactDto) {
        this.contacts.push(createContactDto);
        const message = `Thank ${createContactDto.nome}, for getting in touch and sharing your interests. We look forward to hearing from you soon.`;
        return { confirmation: message };
    }

    async findAll() {
        return this.contacts;
    }
}
