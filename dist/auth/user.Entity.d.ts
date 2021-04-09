import { BaseEntity } from "typeorm";
import { Task } from "src/tasks/task.Entity";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    salt: string;
    tasks: Task[];
    validateUser(password: string): Promise<Boolean>;
}
