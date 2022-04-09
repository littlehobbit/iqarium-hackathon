import {HttpStatus, Injectable, Res} from '@nestjs/common';
import {Express, Response} from "express";
import {CreateImageRequestDto} from "../../dto/CreateImageRequest.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {RequestApproveEntity, RequestEntity} from "../../../typeorm";
import {Repository} from "typeorm";
import {CreateFormRequestDto} from "../../../text-request/dto/CreateFormRequest.dto";
import {CreateApproveImgDto} from "../../../text-request/dto/CreateApproveImg.dto";
import {UpdateImageRequestDto} from "../../dto/UpdateImageRequest.dto";
import {createReadStream} from "fs";
import { join } from 'path';
import {of} from "rxjs";

@Injectable()
export class ImgReqService {

    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>,
        @InjectRepository(RequestApproveEntity) private readonly requestApproveRepository: Repository<RequestApproveEntity>
    ) {
    }

    translateToText (img: Express.Multer.File) {
        const createImageRequestDto: CreateImageRequestDto = {
            "fullName": "Джек Воробей",
            "email": "sparrow@gmail.com",
            "receiver": "Доктор Плюшкин",
            "text": "Задача организации, в особенности же постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Идейные соображения высшего порядка, а также новая модель организационной деятельности позволяет выполнять важные задания по разработке новых предложений.",
            "reqDate": new Date("2022-04-08"),
            "imgPath": "./uploads/requestImages/16.jpg",
        }
        return createImageRequestDto;
    }

    createImgReq(createImageRequestDto: CreateImageRequestDto) {
        console.log(createImageRequestDto);
        const newImage = this.requestRepository.create(createImageRequestDto);
        console.log(newImage);
        return this.requestRepository.save(newImage);
    }


    async getAllRequests() {
        console.log(await this.requestRepository
            .createQueryBuilder()
            .getMany());


        return await this.requestRepository
            .createQueryBuilder()
            .getMany()
    }

    /*getFile(@Res() res: Response) {
        const file = createReadStream(join(process.cwd(), './uploads/requestImages/16.jpg'));
        file.pipe(res);
    }*/

    async getRequestById(id: number) {
        console.log(await this.requestRepository.findOneById(id));

        return await this.requestRepository.findOneById(id);
    }

    updateImgRequest(updateImgRequestDto: CreateImageRequestDto, id: number) {
        let updImage = this.requestRepository
            .update(
                {id: id},
                updateImgRequestDto);
        const approve: CreateApproveImgDto =  {
            expertId: 1,
            reqEntityId: id,
            isApproved: true,
        }

        updImage = this.requestRepository
            .update(
                {id: id},
                {expert1: true}
            )

    }

    async findPicture(id: number, @Res() res) {
        const entity: RequestEntity = await this.requestRepository.findOneById(id);
        if (!entity) return res.send(HttpStatus.NOT_FOUND);
        if (entity.imgPath) return of(res.sendFile(join(process.cwd(), entity.imgPath)));
        else res.send(HttpStatus.NOT_FOUND)
    }

}