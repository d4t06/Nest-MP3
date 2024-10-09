import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { LyricModule } from './lyric/lyric.module';
import { SongLyricModule } from './song-lyric/song-lyric.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
      isGlobal: true,
    }),
    SongModule,
    DatabaseModule,
    AuthModule,
    LyricModule,
    SongLyricModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
