export default () => ({
    mongodbConnection: process.env["MONGODB_CONNECTION"],
    jwtSecret: "secret",
    redisConnection: process.env["REDIS_CONNECTION"]
})