import {
    Body,
    Controller,
    Get, HttpStatus,
    NotFoundException,
    Param, ParseBoolPipe,
    ParseIntPipe,
    Post, Res,
    UploadedFile,
    UseInterceptors, UsePipes, ValidationPipe
} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {Express, Request} from "express";
import {ImgReqService} from "../../services/img-req/img-req.service";
import {diskStorage} from "multer";
import * as path from "path";
import { uuid } from 'uuidv4';
import {CreateFormRequestDto} from "../../../text-request/dto/CreateFormRequest.dto";
import {CreateImageRequestDto} from "../../dto/CreateImageRequest.dto";
import {UpdateImageRequestDto} from "../../dto/UpdateImageRequest.dto";
import {of} from "rxjs";
import {join} from "path";


@Controller('img-req')
export class ImgReqController {

    constructor(private imgReqService: ImgReqService) {
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads/requestImages',
            filename: (req: Request, file,  cb) => {
                const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuid();
                const extension: string =  path.parse(file.originalname).ext;

                cb(null, `${filename}${extension}`)
            }
        })
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        //console.log(file);
        const createImageRequestDto: CreateImageRequestDto = this.imgReqService.translateToText(file);
        // console.log(createImageRequestDto);
        return this.imgReqService.createImgReq(createImageRequestDto);
    }

    @Get('request')
    getAllRequests() {
        console.log('aaa');
        return this.imgReqService.getAllRequests()
    }

    @Get('request/:id')
    //@HttpStatus('')
    getRequestById(@Param('id', ParseIntPipe) id: number) {
        return this.imgReqService.getRequestById(id);
        //const requestMed = this.getRequestById(id);
        //if(requestMed) return requestMed;
        //else throw new NotFoundException();
    }

    @Post('request/:id/ApprovingImage/')
    @UsePipes(ValidationPipe)
    updateImgRequest(
        @Body() updateImgRequestDto: CreateImageRequestDto,
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.imgReqService.updateImgRequest(updateImgRequestDto, id)
    }

    @Get('profile-image/:imagename')
    findProfileImage(@Param('imagename') imagename, @Res() res) {
        return of(res.sendFile(join(process.cwd(), 'uploads/requestImages/' + imagename)));
    }

    @Get('request/Picture/:id')
    findPicture(@Param('id') id, @Res() res) {

        return this.imgReqService.findPicture(id, res);
    }

    /*
    @Get('requestImages/')
    getPicture(@Param() imgPath: string) {
        let res: Response;
        res.sendfile('./uploads/requestImages/16.jpg');
        //return this.imgReqService.getFile()
    }
     */

}
/*
@Post('create')
    @UsePipes(ValidationPipe)
    createFormRequest(@Body() createFormRequestDto: CreateFormRequestDto) {
        return this.formService.createFormReq(createFormRequestDto);
    }
 */