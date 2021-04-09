import { createTaskDto } from './DTO/createTaskDto';
import { Task } from './task.Entity';
import { TasksService } from './tasks.service';
import { SearchFilter } from './DTO/SearchFilter';
import { User } from 'src/auth/user.Entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllData(searchFilter: SearchFilter, user: User): Promise<Task[]>;
    getDataById(Id: number, user: User): Promise<Task>;
    createData(taskDto: createTaskDto, user: User): Promise<Task>;
    updateData(taskDto: createTaskDto, Id: number, user: User): Promise<Task>;
    deleteData(Id: number, user: User): Promise<void>;
}
