/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StudentSchema} from './schema/student.schema'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {dbName: "sch-app"}),
    MongooseModule.forFeature([{name: 'Student', schema: StudentSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
