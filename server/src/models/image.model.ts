import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class Image {

    @Prop()
    filename: string

    @Prop()
    uploadedBy: string

    @Prop()
    uploadedAt: Date
}

export type ImageDocument = Image & Document;

export const ImageSchema = SchemaFactory.createForClass(Image);