import { CacheModule, HttpService, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { PagesModule } from './pages/pages.module';

@Module({
  imports: [
    ContactModule,
    CacheModule.register(),
    PagesModule,
    MongooseModule.forRoot('mongodb://OEGG:yIaQORcB@localhost/OEGG', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
