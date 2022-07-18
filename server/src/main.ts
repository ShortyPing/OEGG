import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";
import {createClient} from "redis";
import {json} from "express";



async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  app.useGlobalPipes(
      new ValidationPipe({
        transform: true
      })
  )

  const options = new DocumentBuilder()
      .setTitle("OEGG Backend")
      .setVersion("0.1")
      .addBearerAuth()
      .build();


  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document);


  await app.listen(3000);
}
bootstrap();
