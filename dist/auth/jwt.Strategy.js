"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const passport_jwt_1 = require("passport-jwt");
const user_Repository_1 = require("./user.Repository");
const config = require("config");
const jwtConfig = config.get('jwt');
let jwtStrategy = class jwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(userRepository) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConfig.secret
        });
        this.userRepository = userRepository;
    }
    async validate(payload) {
        const { username } = payload;
        const user = await this.userRepository.findOne({ username });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
jwtStrategy = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_Repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_Repository_1.UserRepository])
], jwtStrategy);
exports.jwtStrategy = jwtStrategy;
//# sourceMappingURL=jwt.Strategy.js.map