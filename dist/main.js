"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config = require("config");
async function bootstrap() {
    const serverConfig = config.get('server');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const Port = serverConfig.port;
    app.enableCors();
    await app.listen(process.env.PORT || Port, () => {
        console.log(`Host On Port # ${Port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map