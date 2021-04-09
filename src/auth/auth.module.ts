import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.Repository';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './jwt.Strategy';
import * as config from 'config'

const jwtConfig = config.get('jwt')

@Module({
  imports:[
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions:{
        expiresIn: 3600
      }      
    }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    jwtStrategy
  ],
  exports:[
    jwtStrategy,
    PassportModule
  ]
})
export class AuthModule {}
