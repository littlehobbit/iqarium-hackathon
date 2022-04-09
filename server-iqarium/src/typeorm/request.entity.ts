import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsDateString, IsEmail} from "class-validator";
import {RequestApproveEntity} from "./requestApprove.entity";

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
    @IsDateString()
    reqDate: Date;

    @Column({
        nullable: true,
    })
    imgPath: string;

    @Column({
        nullable: false,
        default: false,
    })
    expert1: boolean;

    @Column({
        nullable: false,
        default: false,
    })
    expert2: boolean;

    @Column({
        nullable: false,
        default: false,
    })
    expert3: boolean;


    /*
    @OneToMany(
        () => RequestApproveEntity,
        (requestApproveEntity) => requestApproveEntity.reqEntity
    )
    requestApprove: RequestApproveEntity;
*/
}
/*
@OneToMany(() => Option, (option) => option.question)
  options: Option[];

 */
