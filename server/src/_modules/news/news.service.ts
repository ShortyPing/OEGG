import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {News} from "../../models/news.model";
import mongoose, {Model, mongo} from "mongoose";
import {RedisService} from "../../_services/redis/redis.service";

@Injectable()
export class NewsService {

    constructor(@InjectModel(News.name) private newsModel: Model<News>, private redisService: RedisService) {
    }

    public createNews(title: string, text: string, createdBy: string) {
        return new Promise(async (resolve) => {
            let news = await this.newsModel.create({
                createdAt: new Date(),
                createdBy: createdBy,
                title,
                content: text
            })

            await this.redisService.invalidate("news")

            resolve({
                status: "ok",
                created: news.id
            })
        })
    }

    public getAllNews() {
        return new Promise(async (resolve) => {
            let cached = await this.redisService.getCached("news")
            if(cached) {
                resolve(JSON.parse(cached))
                return;
            }

            this.newsModel.find().select("-content").then(news => {
                this.redisService.cache("news", JSON.stringify(news))
                resolve(news)
            })


        })
    }

    public async getArticle(id: string) {
        return new Promise(async (resolve, reject) => {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                reject(new NotFoundException())
                return;
            }

            let article = await this.redisService.getCached(`article-${id}`);

            if(article) {
                resolve(article)
                return;
            }

            this.newsModel.findById(id).then(article => {
                if(!article) {
                    reject(new NotFoundException())
                    return;
                }

                this.redisService.cache(`article-${id}`, JSON.stringify(article.toJSON()));
                resolve(article)

            })
        })
    }

    public async deleteNews(id: string) {
        return new Promise(async (resolve, reject) => {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                reject(new NotFoundException())
                return;
            }
            this.newsModel.findByIdAndDelete(id).then(async () => {
                await this.redisService.invalidate("news")

                resolve({
                    status: "ok"
                })
            })

        })
    }

    public async updateNewsArticle(id: string, title: string, content: string) {
        return new Promise(async (resolve, reject) => {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                reject(new NotFoundException())
                return;
            }

            this.newsModel.findById(id).then(async document => {
                if(!document) {
                    reject(new NotFoundException())
                    return;
                }

                document.title = title;
                document.content = content;
                await document.save();
                await this.redisService.invalidate("news");
                await this.redisService.invalidate(`article-${id}`)

                resolve({
                    status: "Ok"
                })

            })
        })
    }
}
