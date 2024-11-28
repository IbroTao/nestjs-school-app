/* eslint-disable prettier/prettier */
import {Injectable} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from 'src/dto/student.dtos';
import { IStudent } from 'src/interface/create-student.interface';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<IStudent>) {
    
  }

  async createStudent(CreateStudentDto: CreateStudentDto: Promise<IStudent>) {
    return man
  }
}