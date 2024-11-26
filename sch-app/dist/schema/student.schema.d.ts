export declare class Student {
    name: string;
    roleNumber: number;
    class: number;
    gender: string;
    marks: number;
}
export declare const StudentSchema: import("mongoose").Schema<Student, import("mongoose").Model<Student, any, any, any, import("mongoose").Document<unknown, any, Student> & Student & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Student, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Student>> & import("mongoose").FlatRecord<Student> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
