import {IsDateString, IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class UpdateImageRequestDto {

    fullName: string;

    email: string;

    receiver: string;

    text: string;

    @IsNotEmpty()
    reqDate: Date;


}