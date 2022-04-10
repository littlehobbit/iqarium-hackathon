import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {RequestEntity} from "./request.entity";

@Entity({name: 'categories'})
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn( {
        type: 'bigint',
    })
    id: number;

    @Column({
        default: '',
    })
    category: string;

    @ManyToOne(
        () => RequestEntity,
        (requestEntity) => requestEntity.id
    )
    reqIdCat: RequestEntity;

}