import { Injectable } from '@nestjs/common';
import {Express} from "express";
import {CreateImageRequestDto} from "../../dto/CreateImageRequest.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {RequestEntity} from "../../../typeorm";
import {Repository} from "typeorm";
import {CreateFormRequestDto} from "../../../text-request/dto/CreateFormRequest.dto";

@Injectable()
export class ImgReqService {

    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>
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

    async getRequestById(id: number) {
        console.log(await this.requestRepository.findOneById(id));

        return await this.requestRepository.findOneById(id);
    }
}

/*
findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }
 */

let arr: CreateFormRequestDto[] = [
    {
        "fullName": "Бенедикт Тимоти Карлтон Камбербетч",
        "email": "cucumber@mail.ru",
        "receiver": "Доктор Плюшкин",
        "text": "Задача организации, в особенности же постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Идейные соображения высшего порядка, а также новая модель организационной деятельности позволяет выполнять важные задания по разработке новых предложений.",
        "reqDate": new Date("2022-04-08")
    },
    {
        "fullName": "Джек Воробей",
        "email": "sparrow@gmail.com",
        "receiver": "Доктор Плюшкин",
        "text": "Задача организации, в особенности же постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Идейные соображения высшего порядка, а также новая модель организационной деятельности позволяет выполнять важные задания по разработке новых предложений.",
        "reqDate": new Date("2022-04-08")
    },
    {
        "fullName": "Сатору Годжо",
        "email": "cool@gmail.com",
        "receiver": "Доктор Плюшкин",
        "text": "Задача организации, в особенности же постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Идейные соображения высшего порядка, а также новая модель организационной деятельности позволяет выполнять важные задания по разработке новых предложений.",
        "reqDate": new Date("2022-04-08")
    }
]
