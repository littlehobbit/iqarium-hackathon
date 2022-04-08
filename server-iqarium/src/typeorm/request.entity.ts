import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsDateString, IsEmail} from "class-validator";

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

    /*
    @Column({
        nullable: true,
    })
    isApproved: boolean;

     */
}
