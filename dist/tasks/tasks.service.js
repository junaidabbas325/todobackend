"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const jwt_GetUserDecorator_1 = require("../auth/jwt.GetUserDecorator");
const user_Entity_1 = require("../auth/user.Entity");
const taskRepository_1 = require("./taskRepository");
let TasksService = class TasksService {
    constructor(taskRespository) {
        this.taskRespository = taskRespository;
    }
    async getAllData(searchFilter, user) {
        return this.taskRespository.getAllData(searchFilter, user);
    }
    async getDataById(Id, user) {
        return this.taskRespository.getDataById(Id, user);
    }
    async createData(taskDto, user) {
        return this.taskRespository.createData(taskDto, user);
    }
    async updateData(Id, taskDto, user) {
        return this.taskRespository.updateData(Id, taskDto, user);
    }
    async deleteData(id, user) {
        return this.taskRespository.deleteData(id, user);
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [taskRepository_1.TaskRepository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map