import {ConflictException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../models/user.model";
import {Model} from "mongoose";
import * as bcrypt from 'bcrypt'
import {JwtService} from "@nestjs/jwt";
import {doc} from "prettier";
import * as mongoose from "mongoose";
import {RedisService} from "../../_services/redis/redis.service";
@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService, private redisService: RedisService) {
    }

    async createUser(username: string, email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.userModel.count({
                $or: [
                    {
                        username: username
                    },
                    {
                        email: email
                    }
                ]
            }).then(count => {
                if(count != 0) {
                    reject(new ConflictException())
                    return;
                }

                this.userModel.create({
                    username: username,
                    email: email,
                    password: bcrypt.hashSync(password, 10)
                }).then(() => {
                    resolve({
                        status: "ok"
                    })
                }).catch(err => reject(err))
            })
        })
    }

    async getUsers(): Promise<UserDocument[]> {
        return new Promise((resolve) => {
            this.userModel.find().then(documents => resolve(documents))
        })
    }

    async auth(username: string, password: string) {
        return new Promise<any>((resolve, reject) => {
            this.userModel.findOne({
                username: username
            }).then(document => {
                if(!document) {
                    reject(new UnauthorizedException())
                    return;
                }

                if(bcrypt.compareSync(password, document.password)) {
                    let token = this.jwtService.sign({
                        id: document.id
                    });

                    resolve({
                        status: "ok",
                        token
                    })
                } else {
                    reject(new UnauthorizedException())
                }
            })
        })
    }

    async getUser(id: string) {
        return new Promise<UserDocument>((resolve, reject) => {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                reject(new NotFoundException())
                return;
            }

            this.userModel.findById(id).then(document => {
                if(!document) {
                    reject(new NotFoundException())
                    return;
                }
                resolve(document)
            })
        })
    }

    async getUsername(id: string) {
        return new Promise(async (resolve, reject) => {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                reject(new NotFoundException())
                return;
            }

            let username = await this.redisService.getCached(`username-${id}`);

            if(username) {
                resolve({
                    status: "ok",
                    username
                });
                return;
            }

            this.userModel.findById(id).then(document => {
                if(document) {
                    this.redisService.cache(`username-${id}`, document.username);
                    resolve({
                        status: "ok",
                        username: document.username
                    });
                    return;
                }
                reject(new NotFoundException())
            })

        })
    }
}
