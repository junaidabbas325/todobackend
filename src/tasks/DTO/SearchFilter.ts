import { IsOptional } from "class-validator";
import { TaskStatus } from "../taskStatus";

export class SearchFilter{
    @IsOptional()
    status: TaskStatus;
    @IsOptional()
    search: string;    
}