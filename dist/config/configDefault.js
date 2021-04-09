"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = exports.configBasic = exports.configServer = void 0;
exports.configServer = {
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'JunaidTasks',
    password: 'postgres',
    synchronize: true,
    entities: "[__dirname + '/**/*.entity.{js,ts}]",
    autoLoadEntities: true
};
exports.configBasic = {
    port: 3100
};
exports.jwtConfig = {
    secret: 'KoiToHogana123456',
    expireTime: 3600,
    defaultStrategy: 'jwt',
};
//# sourceMappingURL=configDefault.js.map