import {IsBoolean, IsBooleanString, IsNotEmpty, IsString} from "class-validator";

export class SuggestClassBodyDto {
    @IsNotEmpty()
    status: boolean;

    @IsNotEmpty()
    @IsString()
    suggest: string;
}