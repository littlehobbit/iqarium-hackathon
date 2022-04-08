import {IsDate, IsDateString, IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class CreateFormRequestDto {
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
}