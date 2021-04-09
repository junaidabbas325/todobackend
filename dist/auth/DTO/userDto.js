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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDto = void 0;
const class_validator_1 = require("class-validator");
class userDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(4),
    class_validator_1.MaxLength(16),
    __metadata("design:type", String)
], userDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(8),
    class_validator_1.MaxLength(64),
    class_validator_1.Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: 'Password Too Weak' }),
    __metadata("design:type", String)
], userDto.prototype, "password", void 0);
exports.userDto = userDto;
//# sourceMappingURL=userDto.js.map