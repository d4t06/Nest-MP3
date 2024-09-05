import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST') ?? 'localhost',
        username: configService.get('DB_USER') || 'root',
        password: configService.get('DB_PASS') || '',
        database: configService.get('DB_NAME') || 'next-mp3',
        port: configService.get('DB_PORT') || 3306,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
