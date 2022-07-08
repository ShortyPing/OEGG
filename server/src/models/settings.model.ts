import {Prop, SchemaFactory} from "@nestjs/mongoose";

export class Setting {
    @Prop()
    key: string

    @Prop()
    value: string
}

export type SettingDocument = Setting & Document;

export const SettingSchema = SchemaFactory.createForClass(Setting)