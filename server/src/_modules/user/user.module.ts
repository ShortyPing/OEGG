import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../models/user.model";
import {JwtStrategy} from "./strategies/jwt.strategy";
import {JwtModule} from "@nestjs/jwt";
import config from "../../config";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {v4} from "uuid";
import {SharedServiceModule} from "../../_services/shared-service-module/shared-service.module";

@Module({
  imports: [
      MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
      JwtModule.register({
          //secret: v4()
          secret: config().jwtSecret
      }),
      SharedServiceModule
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy]
})
export class UserModule {
}
