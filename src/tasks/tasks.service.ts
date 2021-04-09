import { Injectable } from '@nestjs/common';
import { GetUser } from 'src/auth/jwt.GetUserDecorator';
import { User } from 'src/auth/user.Entity';
import { createTaskDto } from './DTO/createTaskDto';
import { SearchFilter } from './DTO/SearchFilter';
import { Task } from './task.Entity';
import { TaskRepository } from './taskRepository';

@Injectable()
export class TasksService {
    constructor(
        private taskRespository: TaskRepository
    ){}
    async getAllData(
        searchFilter: SearchFilter,
        user: User
        ):Promise<Task[]>{
        return this.taskRespository.getAllData(searchFilter, user)
    }
    async getDataById(
        Id: number,
        user: User
        ):Promise<Task>{
        return this.taskRespository.getDataById(Id, user)
    }    
    async createData(
        taskDto: createTaskDto,
        user: User
        ):Promise<Task>{
        return this.taskRespository.createData(taskDto, user)
    }
    async updateData(
        Id: number,
        taskDto: createTaskDto,
        user: User
        ):Promise<Task>{
        return this.taskRespository.updateData(Id, taskDto, user)
    }
    async deleteData(
        id: number,
        user: User
        ):Promise<void>{
        return this.taskRespository.deleteData(id, user)
    }
}
