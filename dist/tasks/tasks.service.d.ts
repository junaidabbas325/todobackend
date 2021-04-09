import { User } from 'src/auth/user.Entity';
import { createTaskDto } from './DTO/createTaskDto';
import { SearchFilter } from './DTO/SearchFilter';
import { Task } from './task.Entity';
import { TaskRepository } from './taskRepository';
export declare class TasksService {
    private taskRespository;
    constructor(taskRespository: TaskRepository);
    getAllData(searchFilter: SearchFilter, user: User): Promise<Task[]>;
    getDataById(Id: number, user: User): Promise<Task>;
    createData(taskDto: createTaskDto, user: User): Promise<Task>;
    updateData(Id: number, taskDto: createTaskDto, user: User): Promise<Task>;
    deleteData(id: number, user: User): Promise<void>;
}
