import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as requestIp from 'request-ip'
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  const options = new DocumentBuilder()
  .setTitle("OEGG - Backend")
  .setVersion("1.0")
  .build();

  app.use(requestIp.mw())


  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("docs", app, document)
  await app.listen(3000);
}
bootstrap();
