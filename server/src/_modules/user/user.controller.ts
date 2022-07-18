import {Body, ConflictException, Controller, Get, NotFoundException, Post, Query, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {ApiBearerAuth, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {v4 as createUuid} from "uuid";
import {UserLoginProperty} from "../../properties/user-login.property";
import {AuthGuard} from "@nestjs/passport";
import {Request} from "express";
import {UserUsernameProperty} from "../../properties/user-username.property";

@Controller('user')
@ApiTags("User")
export class UserController {

    constructor(private userService: UserService) {
    }

    @Post("installation")
    @ApiOperation({summary: "Initiates installation routine"})
    async installApplication() {
        if((await this.userService.getUsers()).length != 0) {
            throw new ConflictException("Installation already executed!");
        }
        let password = createUuid().replace(/-/g, "").substring(0, 8);

        await this.userService.createUser("Admin", "admin@example.com", password);

        return {
            status: "ok",
            user: {
                username: "Admin",
                email: "admin@example.com",
                password: password
            }
        }

    }

    @Post("auth")
    @ApiOperation({summary: "Login"})
    async auth(@Body() body: UserLoginProperty) {
        return await this.userService.auth(body.username, body.password)
    }

    @Get("self")
    @ApiOperation({summary: "Get self information"})
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    async getSelf(@Req() request: Request) {
        let id = request.user["id"];

        let user = await this.userService.getUser(id);
        let obj = user.toObject();

        delete obj.password;


        return obj;
    }

    @Get("username")
    @ApiOperation({summary: "Resolve username by id"})
    @ApiQuery({name: "id"})
    async getUsername(@Query() query: UserUsernameProperty) {
        return await this.userService.getUsername(query.id)
    }
}
