import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserUsernameProperty {
    @ApiProperty()
    @IsString()
    id: string
}