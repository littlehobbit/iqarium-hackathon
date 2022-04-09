import { Injectable } from '@nestjs/common';
import {IsDate, IsEmail, IsNotEmpty, MinLength} from "class-validator";
import {CreateFormRequestDto} from "../../dto/CreateFormRequest.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {RequestEntity} from "../../../typeorm/request.entity";
import {Repository} from "typeorm";
import {RequestApproveEntity} from "../../../typeorm";

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>,

    ) {
    }
    async createFormReq(createFormRequestDto: CreateFormRequestDto) {
        console.log(createFormRequestDto);
        const newForm = this.requestRepository.create(createFormRequestDto);
        const entity: RequestEntity = await this.requestRepository.save(newForm);
        entity.expertTranslator = true;
        entity.stage = 3;
    }
}