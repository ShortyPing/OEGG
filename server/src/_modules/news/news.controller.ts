import {Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {NewsCreateProperty} from "../../properties/news-create.property";
import {NewsService} from "./news.service";
import {Request} from "express";
import {IsString} from "class-validator";
import {NewsSearchProperty} from "../../properties/news-search.property";
import {NewsUpdateProperty} from "../../properties/news-update.property";

@Controller('news')
@ApiTags("News")
export class NewsController {

    constructor(private newsService: NewsService) {
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @ApiOperation({summary: "Creates a news"})
    public async createNews(@Body() body: NewsCreateProperty, @Req() request: Request) {
        return await this.newsService.createNews(body.title, body.content, request.user["id"]);
    }

    @Get()
    @ApiOperation({summary: "Get all news without content. For content access article directory via GET /news/search"})
    public async getAllNews() {
        return await this.newsService.getAllNews();
    }

    @Get("search")
    @ApiOperation({summary: "Get a news article by id"})
    @ApiQuery({name: "id", type: String})
    public async getArticle(@Query() query: NewsSearchProperty) {
        return await this.newsService.getArticle(query.id);
    }


    @Delete("/:id")
    @ApiOperation({summary: "Delete a news"})
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @ApiParam({name: "id"})
    public async deleteNews(@Param("id") id: string) {
        return await this.newsService.deleteNews(id)
    }

    @Patch("/:id")
    @ApiOperation({summary: "updates a news article"})
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @ApiParam({name: "id"})
    public async updateArticle(@Param("id") id: string, @Body() body: NewsUpdateProperty) {
        return await this.newsService.updateNewsArticle(id, body.title, body.content)
    }
}
