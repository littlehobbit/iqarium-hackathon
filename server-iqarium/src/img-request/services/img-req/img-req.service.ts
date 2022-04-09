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
        @InjectRepository(RequestApproveEntity) private readonly requestApproveRepository: Repository<RequestApproveEntity>,

    ) {
    }

    async translateToText (img: Express.Multer.File) {
        const createImageRequestDto: CreateImageRequestDto = {
            "fullName": "Джек Воробей",
            "email": "sparrow@gmail.com",
            "receiver": "Доктор Плюшкин",
            "text": "Задача организации, в особенности же постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Идейные соображения высшего порядка, а также новая модель организационной деятельности позволяет выполнять важные задания по разработке новых предложений.",
            "reqDate": new Date("2022-04-08"),
            "imgPath": "./uploads/requestImages/16.jpg",
        }
        console.log(createImageRequestDto);
        const newImage = this.requestRepository.create(createImageRequestDto);
        console.log(newImage);
        const requestEntity: RequestEntity = await this.requestRepository.save(newImage);
        requestEntity.stage = 2;
        //return requestEntity;
        //return createImageRequestDto;
    }

    createImgReq(createImageRequestDto: CreateImageRequestDto) {

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

    async updateImgRequest(updateImgRequestDto: CreateImageRequestDto, id: number) {
        const reqEntity: RequestEntity = await this.requestRepository.findOneById(id);
        if(reqEntity) {
            //for(var i in updateImgRequestDto) if(i === null) delete updateImgRequestDto[i];
            await this.requestRepository.update({id: id}, updateImgRequestDto)
            await this.requestRepository.update({id: id}, {
                expertTranslator: true,
                stage: 3,
            })
        }
    }

    async findPicture(id: number, @Res() res) {
        const entity: RequestEntity = await this.requestRepository.findOneById(id);
        if (!entity) return res.send(HttpStatus.NOT_FOUND);
        if (entity.imgPath) return of(res.sendFile(join(process.cwd(), entity.imgPath)));
        else res.send(HttpStatus.NOT_FOUND)
    }



    //findRequestById(id: number): Promise<>

    /*
     async findQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne(id, {
      relations: ['quiz', 'options'],
    });
  }
     */
}