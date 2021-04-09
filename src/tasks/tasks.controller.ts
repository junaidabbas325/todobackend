import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { createTaskDto } from './DTO/createTaskDto';
import { Task } from './task.Entity';
import { TasksService } from './tasks.service';
import {SearchFilter} from './DTO/SearchFilter'
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/jwt.GetUserDecorator';
import { User } from 'src/auth/user.Entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(
        private tasksService: TasksService
    ){}
    @Get()    
    @UsePipes(ValidationPipe)
    async getAllData(
        @Query() searchFilter: SearchFilter,
        @GetUser() user: User
    ):Promise<Task[]>{
        return this.tasksService.getAllData(searchFilter, user)
    }
    @Get('/:id')
    async getDataById(
        @Param('id', ParseIntPipe) Id: number,
        @GetUser() user: User
        ):Promise<Task>{
        return this.tasksService.getDataById(Id, user)
    }
    @Post()
    @UsePipes(ValidationPipe)
    async createData(
        @Body() taskDto: createTaskDto,
        @GetUser() user: User
        ):Promise<Task>{
        return this.tasksService.createData(taskDto, user)
    }
    @Patch('/:id')
    async updateData(
        @Body() taskDto: createTaskDto,
        @Param('id', ParseIntPipe) Id: number,
        @GetUser() user: User
        ):Promise<Task>{
        return this.tasksService.updateData(Id, taskDto, user)
    }
    @Delete('/:id')
    async deleteData(
        @Param('id', ParseIntPipe) Id: number,
        @GetUser() user: User
        ):Promise<void>{
        return this.tasksService.deleteData(Id, user)
    }
}
