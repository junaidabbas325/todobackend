import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { InjectRepository } from '@nestjs/typeorm'
import { validate } from 'class-validator'
import {Strategy, ExtractJwt} from 'passport-jwt'
import {JwtPayload} from './jwt.payload.interface'
import { User } from './user.Entity'
import { UserRepository } from './user.Repository'
import * as config from 'config'

const jwtConfig = config.get('jwt')
@Injectable()

export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: jwtConfig.secret
            }
        )}
        async validate(payload: JwtPayload):Promise<User>{  
            const {username} = payload 
            const user = await this.userRepository.findOne({username})
            if(!user){
                throw new UnauthorizedException()
            }
            return user
        }
    }
    
