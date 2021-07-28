import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Page, PageDocument } from 'src/models/page.model';

@Injectable()
export class PagesService {
    constructor(@InjectModel(Page.name) private pageModel: Model<PageDocument>) {}

    async getAllPages() {
        return new Promise((resolve, reject) => {
            this.pageModel.find().then(document => {
                resolve(document)
            })
        })
    }

    async createNewPage() {
        
    }
}
