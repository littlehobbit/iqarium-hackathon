import { Injectable } from '@nestjs/common';
import {IsDate, IsEmail, IsNotEmpty, MinLength} from "class-validator";
import {CreateFormRequestDto} from "../../dto/CreateFormRequest.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {RequestEntity} from "../../../typeorm/request.entity";
import {Repository} from "typeorm";
import {RequestApproveEntity} from "../../../typeorm";
import {LabelingService} from "../../../category-analysis/services/labeling/labeling.service";

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>,
        private labelingService: LabelingService,
    ) {
    }
    async createFormReq(createFormRequestDto: CreateFormRequestDto) {
        console.log(createFormRequestDto);
        const newForm = this.requestRepository.create(createFormRequestDto);
        const entity: RequestEntity = await this.requestRepository.save(newForm);
        await this.requestRepository.update({id: entity.id}, {
            stage: 3,
            expertTranslator: true,
        })
        this.labelingService.addQueue(entity.id);
    }
}