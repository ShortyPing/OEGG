import {Injectable, Logger, OnModuleInit} from '@nestjs/common';
import {createClient, RedisDefaultModules} from "redis";
import config from "../../config";
import {RedisClientType as _RedisClientType} from "@redis/client/dist/lib/client";

@Injectable()
export class RedisService{

    client: _RedisClientType<RedisDefaultModules>

    constructor() {
        this.client = createClient({
            url: config().redisConnection
        })
        this.client.connect().then( async () => {
            Logger.log("Successfully connected to redis")
        }).catch((err) => {
            Logger.error("Error while connecting to redis, critical! Shutting down...: " + err)
            process.exit(1)
        });

    }

    public getRedisClient() {
        return this.client
    }

    public async cache(key: string, value: string) {
        await this.client.set(key, value, {
            EX: 60
        })
    }

    public async getCached(key: string): Promise<string> {
        return await this.client.get(key);
    }

    public async invalidate(key: string) {
        return await this.client.del(key);
    }
}
