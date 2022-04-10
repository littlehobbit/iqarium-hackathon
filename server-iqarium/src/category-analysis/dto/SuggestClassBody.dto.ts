import {IsBoolean, IsBooleanString, IsNotEmpty, IsString} from "class-validator";

export class SuggestClassBodyDto {
    @IsNotEmpty()
    @IsBooleanString()
    status: boolean;

    @IsNotEmpty()
    @IsString()
    suggest: string;
}