import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { userDto } from './DTO/userDto';
import { JwtPayload } from './jwt.payload.interface';
import { User } from './user.Entity';
import { UserRepository } from './user.Repository';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}
    async createUser(createUserDto: userDto):Promise<void>{
        
        return this.userRepository.createUser(createUserDto)
    }
    async signIn(createUserDto: userDto):Promise<{accessToken: string}>{
        const username = await this.userRepository.signIn(createUserDto)
        
        if(!username){
            throw new UnauthorizedException()
        }
        const payload = {username}
        const accessToken = await this.jwtService.sign(payload)
        return {accessToken}
    }
    
}
