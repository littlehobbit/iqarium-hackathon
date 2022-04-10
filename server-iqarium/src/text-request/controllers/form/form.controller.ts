import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {FormService} from "../../services/form/form.service";
import {CreateFormRequestDto} from "../../dto/CreateFormRequest.dto";

@Controller('text-req/form')
export class FormController {
    constructor(private formService: FormService) {
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createFormRequest(@Body() createFormRequestDto: CreateFormRequestDto) {
        console.log(createFormRequestDto);
        return this.formService.createFormReq(createFormRequestDto);
    }
}
