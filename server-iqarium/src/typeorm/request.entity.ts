import {BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsDateString, IsEmail} from "class-validator";
import {RequestApproveEntity} from "./requestApprove.entity";
import {ReplyEntity} from "./reply.entity";
import {CategoryEntity} from "./category.entity";

@Entity({name: 'requests'})
export class RequestEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @Column({
        nullable: false,
    })
    fullName: string;

    @Column({
        nullable: false,
    })
    @IsEmail()
    email: string;

    @Column({
        nullable: false,
    })
    receiver: string;

    @Column({
        nullable: false,
    })
    text: string;

    @Column({
        nullable: false,
    })
    reqDate: Date;

    @Column({
        nullable: true,
    })
    imgPath: string;

    @Column({
        nullable: false,
        default: false,
    })
    expertTranslator: boolean;

    @Column({
        nullable: true,
    })
    category: string;

    @Column({
        nullable: false,
        default: 1,
    })
    stage: number;

    @OneToMany(
        () => RequestApproveEntity,
        (requestApproveEntity) => requestApproveEntity.reqId
    )
    requestApprove: RequestApproveEntity[];

    @OneToMany(
        () => ReplyEntity,
        (replyEntity) => replyEntity.reqIdRep
    )
    repIdReq: ReplyEntity[];

    @OneToMany(
        () => CategoryEntity,
        (categoryEntity) => categoryEntity.reqIdCat
    )
    catIdReq: CategoryEntity[];

    /*
    @ManyToOne(
        () => ReplyEntity,
        (replyEntity) => replyEntity.requests
    )
    reply: ReplyEntity;

     */
}
/*
@OneToMany(() => Option, (option) => option.question)
  options: Option[];

 */
