import mongoose, { Schema, Document, ObjectId, Mongoose } from "mongoose"

export interface ITask{
    _id? : ObjectId | string | undefined;
    title: string;
    descriptionn: string;
    status: string;
    createdAt? : string;
    updatedAt? : string;
}

export interface ITaskSchema extends Document{
    _id?: ObjectId | string | undefined;
    title: string;
    description: string;
    status: String;
    createdAt?: string;
    updatedAt?: string;
}

const TaskSchema:Schema = new Schema(
    {
        title:{
            type: String,
            required:true,
            unique:false
        },
        description:{
            type: String,
            required: true,
            unique: false
        },
        status: {
            type:String,
            required:true,
            unique:false
        }
    },{
        versionKey:false,
        timestamps:true,
    }
)

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema)
export default Task