/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;
}