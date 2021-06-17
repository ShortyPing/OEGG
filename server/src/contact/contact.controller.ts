import { Body, Controller, Logger, NotImplementedException, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { ContactRequest } from './properties/contactRequest.property';

@Controller('contact')
@ApiTags("Contact")
export class ContactController {

    constructor(private contactService: ContactService) {}

    @Post("")
    @ApiOperation({summary: "Creates a contact request"})
    async createContactRequest(@Body() body: ContactRequest, @Req() req) {
        console.log(req)
        return await this.contactService.createContactRequest(body, req);
    }
}
