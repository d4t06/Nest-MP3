import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: ['.env.local'],
});

const configService = new ConfigService();

const dbConfig: DataSourceOptions = {
  // DB Variables
  type: 'mysql',
  host: configService.get('DB_HOST') ?? 'localhost',
  username: configService.get('DB_USER') || 'root',
  password: configService.get('DB_PASS') || '',
  database: configService.get('DB_NAME') || 'next-mp3',
  port: configService.get('DB_PORT') || 3306,

  // TypeORM Entity
  entities: ['src/*/entities/*.entity.ts'],
  // Your Migration path
  migrations: ['migrations/*.ts'],
  //
};

const dataSource = new DataSource(dbConfig);

export default dataSource;
