import {HttpStatus, Injectable, NotFoundException, Res} from '@nestjs/common';
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
import {LabelingService} from "../../../category-analysis/services/labeling/labeling.service";

@Injectable()
export class ImgReqService {

    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>,
        @InjectRepository(RequestApproveEntity) private readonly requestApproveRepository: Repository<RequestApproveEntity>,
        private labelingService: LabelingService,
    ) {
    }

    async translateToText (img: Express.Multer.File) {
        const createImageRequestDto: CreateImageRequestDto = {
            "fullName": "Рафик Лиман",
            "email": "kingofsouth@gmail.com",
            "receiver": "Доктор Фельдшер",
            "text": "Задача организации, в особенности же постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Идейные соображения высшего порядка, а также новая модель организационной деятельности позволяет выполнять важные задания по разработке новых предложений.",
            "reqDate": new Date("2022-04-08"),
            "imgPath": img.path,
        }
        /*

         */
        console.log(createImageRequestDto);
        const newImage = this.requestRepository.create(createImageRequestDto);
        console.log(newImage);
        const requestEntity: RequestEntity = await this.requestRepository.save(newImage);
        requestEntity.stage = 2;
        return await  this.requestRepository.update({id: requestEntity.id}, {
            stage: 2,
        });
    }

    async getAllRequests() {
        /*console.log(await this.requestRepository
            .createQueryBuilder()
            .getMany());
*/
        /*return await this.requestRepository.find({
            where: {
                stage: 2,
            }
        })*/

        return await this.requestRepository
            .createQueryBuilder('r')
            .where('r.stage=2')
            .getMany()
    }

    async getRequestById(id: number) {
        /*const obj = (await this.requestRepository.findOneById(id));
        console.log(obj);
        if(obj != null) return obj;
        else return 'Not Found: ' + HttpStatus.NOT_FOUND;*/
        console.log(await this.requestRepository
            .createQueryBuilder('r')
            .where('r.stage=2')
            .andWhere(`r.id=${id}`)
            .getMany()
        )
        /*return await this.requestRepository
            .createQueryBuilder('r')
            .where('r.stage=2')
            .andWhere(`r.id=${id}`)
            .getMany()*/
        return await this.requestRepository.findOne({
            where: {
                id: id,
                stage: 2,
            }
        })
    }

    async updateImgRequest(updateImgRequestDto: UpdateImageRequestDto, id: number) {
        const reqEntity: RequestEntity = await this.requestRepository.findOneById(id);
        if(reqEntity) {
            console.log('Yes!')
            console.log('Yes!')
            await this.requestRepository.update({id: id}, updateImgRequestDto)
            await this.requestRepository.update({id: id}, {
                expertTranslator: true,
                stage: 3,
            })
            this.labelingService.addQueue(id);
            return HttpStatus.OK;
        }
        else console.log(HttpStatus.CONFLICT);
    }

    async findPicture(id: number, @Res() res) {
        const entity: RequestEntity = await this.requestRepository.findOneById(id);
        if (!entity) return res.send(HttpStatus.NOT_FOUND);
        if (entity.imgPath) return of(res.sendFile(join(process.cwd(), entity.imgPath)));
        else res.send(HttpStatus.NOT_FOUND)
    }

    async getAllChecked() {
        console.log('123');
        const requestEntities: RequestEntity[] = await this.requestRepository.find({
            where: {
                stage: 2,
            }
        })
        return requestEntities;

    }
}