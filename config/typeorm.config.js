"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
config_1.ConfigModule.forRoot({
    envFilePath: ['.env.local'],
});
const configService = new config_1.ConfigService();
const dbConfig = {
    type: 'mysql',
    host: configService.get('DB_HOST') ?? 'localhost',
    username: configService.get('DB_USER') || 'root',
    password: configService.get('DB_PASS') || '',
    database: configService.get('DB_NAME') || 'next-mp3',
    port: configService.get('DB_PORT') || 3306,
    entities: ['src/*/entities/*.entity.ts'],
    migrations: ['migrations/*.ts'],
};
const dataSource = new typeorm_1.DataSource(dbConfig);
exports.default = dataSource;
//# sourceMappingURL=typeorm.config.js.map