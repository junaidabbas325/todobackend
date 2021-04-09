"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config = require("config");
const dbConfig = config.get('db');
exports.typeOrmConfig = {
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    database: dbConfig.database,
    password: dbConfig.password,
    synchronize: dbConfig.synchronise,
    autoLoadEntities: true,
    entities: [__dirname + '/**/*.Entity.{js,ts}']
};
//# sourceMappingURL=typeOrmConfig.js.map