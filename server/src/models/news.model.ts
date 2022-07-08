import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class News {
    @Prop()
    title: string

    @Prop()
    content: string

    @Prop()
    createdBy: string

    @Prop()
    createdAt: Date
}

export type NewsDocument = News & Document;

export const NewsSchema = SchemaFactory.createForClass(News);