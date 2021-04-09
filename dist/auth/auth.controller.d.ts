import { AuthService } from './auth.service';
import { userDto } from './DTO/userDto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    createUser(createUserDto: userDto): Promise<void>;
    signIn(createUserDto: userDto): Promise<{
        accessToken: string;
    }>;
}
