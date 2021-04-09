import { JwtService } from '@nestjs/jwt';
import { userDto } from './DTO/userDto';
import { UserRepository } from './user.Repository';
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    createUser(createUserDto: userDto): Promise<void>;
    signIn(createUserDto: userDto): Promise<{
        accessToken: string;
    }>;
}
