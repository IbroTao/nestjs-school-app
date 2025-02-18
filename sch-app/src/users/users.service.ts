import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/models/users";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private UserModel: Model<User>) {}
}