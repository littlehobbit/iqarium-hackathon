import {BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {RequestEntity} from "./request.entity";

@Entity({name:'replies'})
export class ReplyEntity extends BaseEntity {
    @PrimaryGeneratedColumn( {
        type: 'bigint',
    })
    id: number;

    @Column({
        type: 'text',
    })
    text: string;


    @ManyToOne(
        () => RequestEntity,
        (requestEntity) => requestEntity.id
    )
    reqIdRep: RequestEntity;

    /*
    @OneToMany(
        () => RequestEntity,
        (requestEntity) => requestEntity.reply
    )
    requests: RequestEntity[];

     */
}