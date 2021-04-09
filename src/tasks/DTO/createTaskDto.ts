import { IsIn, IsNotEmpty, IsString } from "class-validator";
import { TaskStatus } from "../taskStatus";

export class createTaskDto{
    @IsNotEmpty()
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsString()
    description: string;
    @IsNotEmpty()
    @IsIn([TaskStatus.IN_COMPLETE, TaskStatus.IN_PROGRESS, TaskStatus.COMPLETE])
    status: TaskStatus
}