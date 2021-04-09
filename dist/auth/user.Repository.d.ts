import { Repository } from 'typeorm';
import { userDto } from './DTO/userDto';
import { User } from './user.Entity';
export declare class UserRepository extends Repository<User> {
    createUser(createUserDto: userDto): Promise<void>;
    private passwordHashing;
    signIn(createUserDto: any): Promise<string>;
}
