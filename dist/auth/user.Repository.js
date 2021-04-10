"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_Entity_1 = require("./user.Entity");
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async createUser(createUserDto) {
        const { username, password } = createUserDto;
        const user = new user_Entity_1.User();
        user.username = username,
            user.salt = await bcrypt.genSalt(),
            user.password = await this.passwordHashing(password, user.salt);
        try {
            await user.save();
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Duplicate User Name');
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async passwordHashing(password, salt) {
        const hash = bcrypt.hash(password, salt);
        return hash;
    }
    async signIn(createUserDto) {
        const { username, password } = createUserDto;
        const user = await this.findOne({ username });
        if (user && await user.validateUser(password)) {
            return user.username;
        }
        else {
            null;
        }
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_Entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.Repository.js.map