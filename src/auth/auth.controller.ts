import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { userDto } from './DTO/userDto';
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}
    @Post('/signup')
    async createUser(@Body(ValidationPipe) createUserDto: userDto):Promise<void>{
        
        return this.authService.createUser(createUserDto)
    }
    @Post('/signin')
    async signIn(@Body(ValidationPipe) createUserDto: userDto):Promise<{accessToken: string}>{
        return this.authService.signIn(createUserDto)
    }
    
}
