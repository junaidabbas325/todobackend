import {EntityRepository, Repository} from 'typeorm'
import { userDto } from './DTO/userDto';
import { User } from './user.Entity';
import * as bcrypt from 'bcrypt'
import { ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async createUser(createUserDto: userDto):Promise<void>{
        const {username, password} = createUserDto
        const user = new User()
        user.username = username,
        user.salt = await bcrypt.genSalt(),
        user.password = await this.passwordHashing(password, user.salt)
        try{
            await user.save()   
        }catch(error){
            if(error.code === '23505'){
                throw new ConflictException('Duplicate User Name')
            }
            throw new InternalServerErrorException()
        }
    }
    private async passwordHashing(password, salt):Promise<string>{
        const hash = bcrypt.hash(password, salt)
        return hash
    }
    async signIn(createUserDto):Promise<string>{
        const {username, password} = createUserDto
        const user = await this.findOne({username})
        if(user && await user.validateUser(password)){                    
            return user.username
        }
        else{
            null
        }

    }
}