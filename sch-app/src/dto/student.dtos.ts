/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly roleNumber: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender: string;

    @IsNumber()
    @IsNotEmpty()
    readonly marks: number;
    
    @IsNumber()
    @IsNotEmpty()
    readonly class: number;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(2)
    readonly personAge: number;

    @IsNotEmpty()
    readonly address: string;
}