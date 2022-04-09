import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {RequestEntity} from "./request.entity";

@Entity({name: 'reqApprove'})
export class RequestApproveEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id: number;

    @Column({
        nullable: false,
    })
    expertId: number;

    @Column({
        nullable: false,
        default: false,
    })
    isApproved: boolean;
/*
    @ManyToOne(
        () => RequestEntity,
        (requestEntity) => requestEntity.requestApprove
    )
    reqEntity: RequestEntity;

 */

}
/*
@ManyToOne(() => Question, (question) => question.options)
  question: Question
 */