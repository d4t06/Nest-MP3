import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { SongLyricModule } from './song-lyric/song-lyric.module';
import { StorageService } from './storage/storage.service';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
      isGlobal: true,
    }),
    SongModule,
    DatabaseModule,
    AuthModule,
    SongLyricModule,
    StorageModule,
  ],
  providers: [AppService, StorageService],
  controllers: [AppController],
})
export class AppModule {}
