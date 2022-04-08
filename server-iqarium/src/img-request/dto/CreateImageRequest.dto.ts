import {IsDateString, IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class CreateImageRequestDto {
    @IsNotEmpty()
    @MinLength(6)
    fullName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(3)
    receiver: string;

    @IsNotEmpty()
    @MinLength(100)
    text: string;

    @IsNotEmpty()
    @IsDateString()
    reqDate: Date;

    @IsNotEmpty()
    imgPath: string;
}