"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const bodyParse = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
        origin: ['http://localhost:3000', 'https://next-mp3.vercel.app'],
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(bodyParse.urlencoded({
        type: 'multipart/form-data',
        extended: true,
        parameterLimit: 9000000,
    }));
    await app.listen(process.env.PORT || 4000, () => {
        console.log(`App running on port:${process.env.PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map