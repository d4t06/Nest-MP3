import { Module } from '@nestjs/common';
import { SongLyricService } from './song-lyric.service';
import { SongLyricController } from './song-lyric.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongLyric } from './entities/song-lyric.entity';

@Module({
  providers: [SongLyricService],
  controllers: [SongLyricController],
  imports: [TypeOrmModule.forFeature([SongLyric])],
})
export class SongLyricModule {}
