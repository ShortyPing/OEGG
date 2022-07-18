import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { UserModule } from './_modules/user/user.module';
import config from "./config";
import {JwtModule} from "@nestjs/jwt";
import { NewsModule } from './_modules/news/news.module';
import { RedisService } from './_services/redis/redis.service';
import { SharedServiceModule } from './_services/shared-service-module/shared-service.module';
import { GalleryModule } from './_modules/gallery/gallery.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        MongooseModule.forRoot(config().mongodbConnection),
        UserModule,
        NewsModule,
        SharedServiceModule,
        GalleryModule
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: []
})
export class AppModule {
}
