import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Page, PageSchema } from 'src/models/page.model';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature([{name: Page.name, schema: PageSchema}])
  ],
  controllers: [PagesController],
  providers: [PagesService]
})
export class PagesModule {}
