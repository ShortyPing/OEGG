export default () => ({
    mongodbConnection: process.env["MONGODB_CONNECTION"],
    jwtSecret: "secret"
})