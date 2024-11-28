/* eslint-disable prettier/prettier */
import {PartialType} from "@nestjs/mapped-types"
import { CreateStudentDto } from "src/dto/student.dtos";

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    
}
