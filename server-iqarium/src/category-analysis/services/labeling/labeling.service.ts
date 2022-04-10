import { Injectable } from '@nestjs/common';
import {CategoryEntity, ReplyEntity, RequestApproveEntity, RequestEntity} from "../../../typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Response, Request } from "express";
import axios, {AxiosResponse} from 'axios';

interface ClassificationList {
    list: string[]
}


@Injectable()
export class LabelingService {

    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>,
        @InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>,
    ) {
    }

    queueArr = [];
    executing: Promise<any>;

    addQueue(id) {
        this.queueArr.push(id);
        this.execute()
    }


    async labelFunc () {

        let id = this.queueArr.shift()

        const entityReq: RequestEntity = await this.requestRepository.findOneById(id);



        axios.post<ClassificationList>('http://10.2.0.105:5000/get-classification',
            { text: entityReq.text }
            )
            .then(async response => {
                console.log(response.data);
                await this.requestRepository.update(
                    {
                        id: id,
                    },
                    {
                        stage: 4,
                    }
                )
            });



        /*let array = JSON.parse(xmlHttp.response.body);

        let arr = []
        array.classification.forEach( element =>{
            arr.push(this.categoryRepository.save({
                category:element,
                reqIdCat:entityReq
            }))
        })
        const result = Promise.all(arr);*/

        //console.log(array);
    }

    async execute(){
        let arr = []
        while(this.queueArr.length > 0) {
            arr.push(this.labelFunc());
        }
        let result = await Promise.all(arr);
    }

}
