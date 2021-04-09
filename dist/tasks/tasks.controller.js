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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const createTaskDto_1 = require("./DTO/createTaskDto");
const tasks_service_1 = require("./tasks.service");
const SearchFilter_1 = require("./DTO/SearchFilter");
const passport_1 = require("@nestjs/passport");
const jwt_GetUserDecorator_1 = require("../auth/jwt.GetUserDecorator");
const user_Entity_1 = require("../auth/user.Entity");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async getAllData(searchFilter, user) {
        return this.tasksService.getAllData(searchFilter, user);
    }
    async getDataById(Id, user) {
        return this.tasksService.getDataById(Id, user);
    }
    async createData(taskDto, user) {
        return this.tasksService.createData(taskDto, user);
    }
    async updateData(taskDto, Id, user) {
        return this.tasksService.updateData(Id, taskDto, user);
    }
    async deleteData(Id, user) {
        return this.tasksService.deleteData(Id, user);
    }
};
__decorate([
    common_1.Get(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Query()),
    __param(1, jwt_GetUserDecorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SearchFilter_1.SearchFilter,
        user_Entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getAllData", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, jwt_GetUserDecorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_Entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getDataById", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __param(1, jwt_GetUserDecorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTaskDto_1.createTaskDto,
        user_Entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "createData", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __param(2, jwt_GetUserDecorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTaskDto_1.createTaskDto, Number, user_Entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateData", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, jwt_GetUserDecorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_Entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteData", null);
TasksController = __decorate([
    common_1.Controller('tasks'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map