import { JwtPayload } from './jwt.payload.interface';
import { User } from './user.Entity';
import { UserRepository } from './user.Repository';
declare const jwtStrategy_base: new (...args: any[]) => any;
export declare class jwtStrategy extends jwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
