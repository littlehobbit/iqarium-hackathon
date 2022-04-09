import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ReplyEntity, RequestApproveEntity, RequestEntity} from "../../../typeorm";
import {Repository} from "typeorm";
import {CreateImageRequestDto} from "../../../img-request/dto/CreateImageRequest.dto";
import {LabelingService} from "../labeling/labeling.service";

@Injectable()
export class CategoryAnalysisService {

    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>,
        @InjectRepository(RequestApproveEntity) private readonly reqApproveRepository: Repository<RequestApproveEntity>,
        @InjectRepository(ReplyEntity) private readonly replyRepository: Repository<ReplyEntity>,
        
    ) {
    }

    async getAllNotClassified() {
        const notClass: RequestEntity[] = await this.requestRepository.findBy({
            stage: 3,
        })
        console.log(notClass);
        return notClass;
    }

    async getNotClassifiedById(id: number) {
        return await this.requestRepository.findOneById(id);
    }

    async suggestClassification(id: number, suggest: string, status: boolean) {
        const entityReq: RequestEntity = await this.requestRepository.findOneById(id);
        if(entityReq) {
            const entityApprove: RequestApproveEntity = await this.reqApproveRepository.save({
                status: status,
                suggest: suggest,
                reqId: entityReq
                }
            )

            const entityReqArr: RequestApproveEntity[] = await this.reqApproveRepository.find({where:{
                        reqId:{
                            id:id
                        }
                    }
                }
            )
            if(entityReq.stage === 4 && entityReqArr.length > 2) {
                entityReq.stage = 5;
                //await this.requestRepository.save(entityReq);
                await this.requestRepository.update(
                    {
                            id: id
                    },
                    {
                        stage: 5
                })
                //this.labelService.addQueue(id);
            }
        }
    }

    async getAllManual() {
        const notClass: RequestEntity[] = await this.requestRepository.findBy({
            stage: 5,
        })
        console.log(notClass);
        return notClass;
    }

    async addReply(id: number, replyText: string) {
        const entityReq: RequestEntity = await this.requestRepository.findOneById(id);
        if(entityReq) {
            const entityReply: ReplyEntity = await this.replyRepository.save({
                text: replyText,
                reqIdRep: entityReq
            })
            if(entityReq.stage === 5) {
                return await this.requestRepository.update(
                    {
                        id: id
                    },
                    {
                        stage: 6
                    })
            }
        }
    }


}


