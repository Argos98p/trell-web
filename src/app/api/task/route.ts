import { messages } from "@/utils/messages";
import { connectMongoDB } from "@/lib/mongodb";
import Task, { ITaskSchema } from "@/models/Task";
import { NextRequest, NextResponse } from "next/server";
import { ITask } from '../../../models/Task';

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();
    const body = await request.json();

    const { title, description, status } = body;

    if (!title || !description || !status) {
      return NextResponse.json(
        {
          message: messages.error.needProps,
        },
        {
          status: 400,
        }
      );
    }

    const taskToSave:ITaskSchema = new Task({
        title,
        description,
        status
    })

    const newTask = await taskToSave.save();
    console.log(newTask) 
    return NextResponse.json({
        message: messages.succes.created
    },{
        status:200
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
        message: error
    },{status:500})
  }
}

export async function GET(request:NextRequest){
  try {
    await connectMongoDB();
    let tasks= []
    for await (const doc of Task.find()) {
      tasks.push(doc) 
    }
    return NextResponse.json({
      tasks
    },{status:200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      error:error
    },{status:500})
  }
}
