import {IsDateString, IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class UpdateImageRequestDto {
    @MinLength(6)
    fullName: string;

    @IsEmail()
    email: string;

    @MinLength(3)
    receiver: string;

    @MinLength(100)
    text: string;

    @IsDateString()
    reqDate: Date;

    @MinLength(1)
    imgPath: string;
}