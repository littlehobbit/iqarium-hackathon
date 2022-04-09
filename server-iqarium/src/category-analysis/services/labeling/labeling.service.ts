import { Injectable } from '@nestjs/common';
import {CategoryEntity, ReplyEntity, RequestApproveEntity, RequestEntity} from "../../../typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class LabelingService {

    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>,
        @InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>,
    ) {
    }

    queueArr: number[];
    executing: Promise<any>;

    addQueue(id) {
        this.queueArr.push(id);
        this.execute()
    }


    async labelFunc () {

        let id = this.queueArr.shift()

        const entityReq: RequestEntity = await this.requestRepository.findOneById(id);

        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", 'http://10.2.0.105:5050/get-classification', false ); // false for synchronous request
        await xmlHttp.send(JSON.stringify({
            text: entityReq.text,
        }) );
        const category: string = await xmlHttp.response();

        let array = JSON.parse(xmlHttp.response.body);

        let arr = []
        array.classification.forEach( element =>{
            arr.push(this.categoryRepository.save({
                category:element,
                reqIdCat:entityReq
            }))
        })
        const result = Promise.all(arr);
        this.requestRepository.update(
            {
                id: id,
            },
            {
                stage: 4,
            }
        )
        console.log(array);
    }

    async execute(){
        let arr = []
        while(this.queueArr.length > 0) {
            arr.push(this.labelFunc());
        }
        let result = await Promise.all(arr);
    }

}
