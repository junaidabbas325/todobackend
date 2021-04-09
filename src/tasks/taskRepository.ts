import { NotFoundException } from '@nestjs/common'
import { GetUser } from 'src/auth/jwt.GetUserDecorator'
import { User } from 'src/auth/user.Entity'
import {EntityRepository, Repository} from 'typeorm'
import { createTaskDto } from './DTO/createTaskDto'
import { SearchFilter } from './DTO/SearchFilter'
import {Task} from './task.Entity'
@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
    async getAllData(
        searchFilter: SearchFilter,
        user: User
        ):Promise<Task[]>{
        const {status, search} = searchFilter
        const query = this.createQueryBuilder('task')

        query.where('task.userId = :userd', {userd: user.id})

        if(status){
            query.andWhere('task.status = :status', {status})            
        }
        if(search){
            query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', {search: `%${search}%`})          
        }
        const task = await query.getMany()
        return task
    }
    async getDataById(
        id: number,
        user: User
        ):Promise<Task>{
        const find = await this.findOne({where: {id, userId: user.id}})
        if(!find){
            throw new NotFoundException(`Task with id ${id} Not Found`)
        }
        return find
    }
    async createData(
        taskDto: createTaskDto,
        user: User
        ):Promise<Task>{
        const {title, description, status} = taskDto
        const task = new Task()
        task.title = title,
        task.description = description,
        task.status = status
        task.user = user
        await task.save()
        return task
    }
    async updateData(id: number, taskDto: createTaskDto, user: User):Promise<Task>{
        const {title, description, status} = taskDto
        const task = await this.getDataById(id, user)
        console.log(task)
        task.title = title || task.title,
        task.description = description ||  task.description,
        task.status = status || task.status
        await task.save()
        return task
    }
    async deleteData(
        id: number,
        user: User
        ):Promise<void>{
        const result = await this.delete({id, userId: user.id})
        if(result.affected === 0){
            throw new NotFoundException(`Task with id ${id} Not Found`)
        }
    }
}