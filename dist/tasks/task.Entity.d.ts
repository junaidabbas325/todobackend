import { User } from "src/auth/user.Entity";
import { BaseEntity } from "typeorm";
import { TaskStatus } from "./taskStatus";
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
