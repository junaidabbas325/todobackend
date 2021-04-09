import { User } from "src/auth/user.Entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./taskStatus";

@Entity()
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: TaskStatus

    @ManyToOne(type => User, user => user.tasks, {eager: false})
    user: User

    @Column()
    userId: number
}