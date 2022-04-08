import {
    Controller,
    Get, HttpStatus,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {Express, Request} from "express";
import {ImgReqService} from "../../services/img-req/img-req.service";
import {diskStorage} from "multer";
import * as path from "path";
import { uuid } from 'uuidv4';
import {CreateFormRequestDto} from "../../../text-request/dto/CreateFormRequest.dto";
import {CreateImageRequestDto} from "../../dto/CreateImageRequest.dto";

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
        //console.log(createImageRequestDto);
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

    @Post('updateImgReq')
    updateImgReq() {
        //
    }

}
