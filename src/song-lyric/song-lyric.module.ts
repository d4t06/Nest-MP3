import { Module } from '@nestjs/common';
import { SongLyricService } from './song-lyric.service';
import { SongLyricController } from './song-lyric.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongLyric } from './entities/song-lyric.entity';
import { LyricModule } from 'src/lyric/lyric.module';

@Module({
  providers: [SongLyricService],
  controllers: [SongLyricController],
  imports: [LyricModule, TypeOrmModule.forFeature([SongLyric])],
})
export class SongLyricModule {}
