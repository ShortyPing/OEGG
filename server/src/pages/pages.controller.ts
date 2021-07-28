import { CacheInterceptor, CacheTTL, Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PagesService } from './pages.service';

@Controller('pages')
@ApiTags("Pages")
export class PagesController {

    constructor(private pageService: PagesService) {}
    
    @Get()
    @ApiOperation({summary: "List all pages"})
    @UseInterceptors(CacheInterceptor)
    @CacheTTL(60*30)
    async getAllPages() {
        return await this.pageService.getAllPages()
        
    }
    
}
