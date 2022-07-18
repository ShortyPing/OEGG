import {IsString} from "class-validator";

export class NewsSearchProperty {

    @IsString()
    id: string
}