import { Injectable } from '@nestjs/common';
import {IsDate, IsEmail, IsNotEmpty, MinLength} from "class-validator";
import {CreateFormRequestDto} from "../../dto/CreateFormRequest.dto";

@Injectable()
export class FormService {
    createFormReq(createFormRequestDto: CreateFormRequestDto) {
        return console.log(createFormRequestDto);
    }
}
