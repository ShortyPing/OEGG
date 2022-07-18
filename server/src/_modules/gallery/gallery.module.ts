import { Module } from '@nestjs/common';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Image, ImageSchema} from "../../models/image.model";
import {SharedServiceModule} from "../../_services/shared-service-module/shared-service.module";
import {MulterModule} from "@nestjs/platform-express";

@Module({
  imports: [
      MongooseModule.forFeature([{name: Image.name, schema: ImageSchema}]),
      SharedServiceModule,
      MulterModule.register()
  ],
  controllers: [GalleryController],
  providers: [GalleryService]
})
export class GalleryModule {}
