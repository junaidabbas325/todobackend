"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const tasks_controller_1 = require("./tasks.controller");
const typeorm_1 = require("@nestjs/typeorm");
const taskRepository_1 = require("./taskRepository");
const auth_module_1 = require("../auth/auth.module");
const passport_1 = require("@nestjs/passport");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt'
            }),
            typeorm_1.TypeOrmModule.forFeature([taskRepository_1.TaskRepository]),
            auth_module_1.AuthModule,
        ],
        providers: [tasks_service_1.TasksService],
        controllers: [tasks_controller_1.TasksController]
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map