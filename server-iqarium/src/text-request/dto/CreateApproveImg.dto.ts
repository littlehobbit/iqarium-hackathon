import {IsNotEmpty} from "class-validator";

export class CreateApproveImgDto {
    @IsNotEmpty()
    expertId: number;

    @IsNotEmpty()
    reqEntityId: number;

    @IsNotEmpty()
    isApproved: boolean;

}