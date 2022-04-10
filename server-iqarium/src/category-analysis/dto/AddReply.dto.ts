import {IsNotEmpty, IsString} from "class-validator";

export class AddReplyDto {
    @IsString()
    @IsNotEmpty()
    replyText: string;
}