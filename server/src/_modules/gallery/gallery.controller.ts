import {
    Controller, Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Req, Res,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiParam, ApiTags} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";
import {AuthGuard} from "@nestjs/passport";
import {GalleryService} from "./gallery.service";
import {Request, Response} from "express";
import {createReadStream} from "fs";

@Controller('gallery')
@ApiTags("Gallery")
export class GalleryController {

    constructor(private galleryService: GalleryService) {
    }

    @Post("upload")
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @ApiOperation({summary: "upload a image to gallery"})
    @UseInterceptors(FileInterceptor('file', {
        dest: "./upload"
    }))
    async upload(@UploadedFile() file: Express.Multer.File, @Req() request: Request) {
        return await this.galleryService.uploadImage(file.filename, request.user["id"])
    }

    @Get()
    @ApiOperation({summary: "get all images"})
    async getAllImages() {
        return await this.galleryService.getAllImages();
    }

    @Get("stream/:id")
    @ApiOperation({summary: "Stream a image"})
    @ApiParam({name: "id"})
    async stream(@Param("id") id: string, @Res() res: Response) {
        let filename = (await this.galleryService.getImageFilename(id))["filename"]
        if(!filename) {
            throw new NotFoundException()
        }
        const file = createReadStream(process.cwd() + "/upload/" + filename)
        file.pipe(res);

    }

    @Delete("/:id")
    @ApiOperation({summary: "delete a image"})
    @ApiParam({name: "id"})
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    async deleteImage(@Param("id") id: string) {
        return await this.galleryService.deleteFile(id);
    }
}
