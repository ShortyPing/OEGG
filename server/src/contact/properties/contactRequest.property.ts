import { ApiProperty } from "@nestjs/swagger";

export class ContactRequest {
    
    @ApiProperty({})
    email: string

    @ApiProperty({})
    name: string

    @ApiProperty({})
    text: string

    @ApiProperty({})
    hp: string

    @ApiProperty({})
    captchaToken: string

}