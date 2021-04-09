import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './taskRepository';
import { AuthModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    TypeOrmModule.forFeature([TaskRepository]),
    AuthModule,
  ],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
