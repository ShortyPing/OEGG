import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import {MongooseModule} from "@nestjs/mongoose";
import {News, NewsSchema} from "../../models/news.model";
import {RedisService} from "../../_services/redis/redis.service";
import {SharedServiceModule} from "../../_services/shared-service-module/shared-service.module";
@Module({
  imports: [
      MongooseModule.forFeature([{name: News.name, schema: NewsSchema}]),
      SharedServiceModule
  ],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {}
