import { IsNotEmpty, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class userDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(16)
    username: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(64)    
    password: string;
}