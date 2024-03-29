import {HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {CategoryEntity, ReplyEntity, RequestApproveEntity, RequestEntity} from "../../../typeorm";
import {Repository} from "typeorm";

@Injectable()
export class CategoryAnalysisService {

    constructor(
        @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>,
        @InjectRepository(RequestApproveEntity) private readonly reqApproveRepository: Repository<RequestApproveEntity>,
        @InjectRepository(ReplyEntity) private readonly replyRepository: Repository<ReplyEntity>,
        @InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>,

    ) {
    }

    async getAllNotClassified() {
        const notClass = await this.requestRepository
            .createQueryBuilder('r')
            .leftJoinAndMapMany('r.category', 'categories',  'c', 'c.reqIdCatId = r.id')
            .where('r.stage = 4')
            .getMany();
        return notClass
    }

    async getNotClassifiedById(id: number) {
        const notClass = await this.requestRepository
            .createQueryBuilder('r')
            .leftJoinAndMapMany('r.category', 'categories',  'c', 'c.reqIdCatId = r.id')
            .where('r.stage = 4')
            .andWhere(`r.id = ${id}`)
            .getOne()
        return notClass;
    }

    async suggestClassification(id: number, suggest: string, status: boolean) {
        console.log(status);
        const entityReq: RequestEntity = await this.requestRepository.findOneById(id);
        if(entityReq != null && entityReq != undefined) {
            console.log("Cool, first!")
            if (suggest != null && status != null && suggest != undefined && status != undefined) {
                await this.reqApproveRepository.save({
                        status: status,
                        suggest: suggest,
                        reqId: entityReq
                    }
                )

                const entityReqArr: RequestApproveEntity[] = await this.reqApproveRepository.find({
                    where: {
                        reqId: {
                            id:id
                        }
                    }
                })
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

                    const entityArr: RequestApproveEntity[] = await this.reqApproveRepository.find({
                        where: {
                            reqId: {
                                id: id,
                            },
                        }
                    })

                    let flag: boolean = true;
                    for(let i=0; i < entityArr.length && flag === true; i++) {
                        if (entityArr[i].status === false) flag = false;
                    }

                    if(entityReq.stage === 5 && flag === true) {
                        await this.requestRepository.update(
                            {
                                id: id
                            },
                            {
                                stage: 6
                            })
                    }
                }
            }
            else return 'BAD REQUEST: ' + HttpStatus.BAD_REQUEST
        }
        else return 'NoT Found: ' + HttpStatus.NOT_FOUND;
    }

    async getAllManual() {
        const notClass = await this.requestRepository
            .createQueryBuilder('r')
            .leftJoinAndMapMany('r.suggest', 'reqApprove',  'rA', 'rA.reqIdId = r.id')
            .leftJoinAndMapMany('r.category', 'categories',  'c', 'c.reqIdCatId = r.id')
            .where('r.stage = 5')
            .getMany();
        return notClass
    }

    async getManualById(id: number) {
        //const element = await this.requestRepository.findOneById(id);
        const notClass = await this.requestRepository
            .createQueryBuilder('r')
            .leftJoinAndMapMany('r.suggest', 'reqApprove',  'rA', 'rA.reqIdId = r.id')
            .leftJoinAndMapMany('r.category', 'categories',  'c', 'c.reqIdCatId = r.id')
            .where('r.stage = 5')
            .andWhere(`r.id = ${id}`)
            .getOne();
        return notClass;
    }

    async addReply(id: number, replyText: string) {
        if(typeof replyText === null || typeof replyText === undefined) return HttpStatus.BAD_REQUEST;
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
        else return  'Not Found: ' + HttpStatus.NOT_FOUND;
    }


}


