/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nestjs_tutorial'),
    UserModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
