import { Injectable } from '@nestjs/common';
import {IsDate, IsEmail, IsNotEmpty, MinLength} from "class-validator";
import {CreateFormRequestDto} from "../../dto/CreateFormRequest.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {RequestEntity} from "../../../typeorm/request.entity";
import {Repository} from "typeorm";

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>
    ) {
    }
    createFormReq(createFormRequestDto: CreateFormRequestDto) {
        console.log(createFormRequestDto);
        const newForm = this.requestRepository.create(createFormRequestDto);
        return this.requestRepository.save(newForm);
    }
}