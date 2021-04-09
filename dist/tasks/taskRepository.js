"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const common_1 = require("@nestjs/common");
const jwt_GetUserDecorator_1 = require("../auth/jwt.GetUserDecorator");
const user_Entity_1 = require("../auth/user.Entity");
const typeorm_1 = require("typeorm");
const task_Entity_1 = require("./task.Entity");
let TaskRepository = class TaskRepository extends typeorm_1.Repository {
    async getAllData(searchFilter, user) {
        const { status, search } = searchFilter;
        const query = this.createQueryBuilder('task');
        query.where('task.userId = :userd', { userd: user.id });
        if (status) {
            query.andWhere('task.status = :status', { status });
        }
        if (search) {
            query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search: `%${search}%` });
        }
        const task = await query.getMany();
        return task;
    }
    async getDataById(id, user) {
        const find = await this.findOne({ where: { id, userId: user.id } });
        if (!find) {
            throw new common_1.NotFoundException(`Task with id ${id} Not Found`);
        }
        return find;
    }
    async createData(taskDto, user) {
        const { title, description, status } = taskDto;
        const task = new task_Entity_1.Task();
        task.title = title,
            task.description = description,
            task.status = status;
        task.user = user;
        await task.save();
        return task;
    }
    async updateData(id, taskDto, user) {
        const { title, description, status } = taskDto;
        const task = await this.getDataById(id, user);
        console.log(task);
        task.title = title || task.title,
            task.description = description || task.description,
            task.status = status || task.status;
        await task.save();
        return task;
    }
    async deleteData(id, user) {
        const result = await this.delete({ id, userId: user.id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with id ${id} Not Found`);
        }
    }
};
TaskRepository = __decorate([
    typeorm_1.EntityRepository(task_Entity_1.Task)
], TaskRepository);
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=taskRepository.js.map