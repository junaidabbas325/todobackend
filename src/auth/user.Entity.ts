import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Task } from "src/tasks/task.Entity";
@Entity()
@Unique(['username'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @OneToMany(type => Task, task => task.user, {eager: true})
    tasks: Task[]

    async validateUser(password: string):Promise<Boolean>{
        const hashPassword = await bcrypt.hash(password, this.salt)
        return hashPassword === this.password
    }

}