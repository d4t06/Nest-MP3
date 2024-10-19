import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { SongLyric } from 'src/song-lyric/entities/song-lyric.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song, SongLyric])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
