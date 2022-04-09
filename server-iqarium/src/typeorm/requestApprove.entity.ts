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
        default: false,
    })
    status: boolean;

    @Column({
        nullable: false,
    })
    suggest: string;





    @ManyToOne(
        () => RequestEntity,
        (requestEntity) => requestEntity.id
    )
    reqId: RequestEntity;

}
/*
@ManyToOne(() => Question, (question) => question.options)
  question: Question
 */