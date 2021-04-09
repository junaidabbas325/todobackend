import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from "./config/typeOrmConfig";

@Module({
  imports: [    
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    AuthModule,
]
})
export class AppModule{}