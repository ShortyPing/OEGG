import {Injectable, NotFoundException} from '@nestjs/common';
import {RedisService} from "../../_services/redis/redis.service";
import mongoose, {Model, Promise} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Image} from "../../models/image.model";
import * as fs from 'fs'
import {doc} from "prettier";
@Injectable()
export class GalleryService {
    constructor(private redisService: RedisService, @InjectModel(Image.name) private imageModel: Model<Image>) {
    }

    async getAllImages() {
        return new Promise(async (resolve) => {
            let images = await this.redisService.getCached("images")

            if(images) {
                resolve(images)
                return;
            }
            this.imageModel.find().then(async document => {
                await this.redisService.cache("images", JSON.stringify(document))
                resolve(document);
            })


        })
    }

    async uploadImage(filename: string, user: string) {
        return new Promise(async (resolve) => {
            await this.imageModel.create({
                filename: filename,
                uploadedBy: user,
                uploadedAt: new Date()
            })
            await this.redisService.invalidate("images")

            resolve({
                status: "ok"
            })
        })
    }

    async deleteFile(id: string) {
        return new Promise(async (resolve, reject) => {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                reject(new NotFoundException())
                return;
            }

            this.imageModel.findByIdAndDelete(id).then(async document => {
                if(!document) {
                    reject(new NotFoundException())
                    return;
                }
                fs.unlinkSync(process.cwd() + "/upload/" + document.filename)
                await this.redisService.invalidate("images")
                resolve({
                    status: "ok"
                })
            })
        })
    }

    async getImageFilename(id: string) {
        return new Promise(async (resolve, reject) => {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                reject(new NotFoundException())
                return;
            }
            let filename = await this.redisService.getCached(`image-${id}`);
            if(filename) {
                resolve({
                    status: "ok",
                    filename
                })
                return;
            }

            this.imageModel.findById(id).then(document => {
                if(!document) {
                    reject(new NotFoundException())
                    return;
                }
                resolve({
                    status: "ok",
                    filename: document.filename
                })
            })
        })
    }
}
