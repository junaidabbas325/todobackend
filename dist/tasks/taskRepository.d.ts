import { User } from 'src/auth/user.Entity';
import { Repository } from 'typeorm';
import { createTaskDto } from './DTO/createTaskDto';
import { SearchFilter } from './DTO/SearchFilter';
import { Task } from './task.Entity';
export declare class TaskRepository extends Repository<Task> {
    getAllData(searchFilter: SearchFilter, user: User): Promise<Task[]>;
    getDataById(id: number, user: User): Promise<Task>;
    createData(taskDto: createTaskDto, user: User): Promise<Task>;
    updateData(id: number, taskDto: createTaskDto, user: User): Promise<Task>;
    deleteData(id: number, user: User): Promise<void>;
}
