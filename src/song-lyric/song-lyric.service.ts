import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SongLyric } from './entities/song-lyric.entity';
import { Repository } from 'typeorm';
import { UpdateSongLyricDto } from './entities/dtos/update-song-lyric.dto';
import { CreateSongLyricDto } from './entities/dtos/create-song-lyric.dto';

@Injectable()
export class SongLyricService {
  constructor(
    @InjectRepository(SongLyric)
    private readonly songLyricRepository: Repository<SongLyric>,
  ) {}

  async findBySongId(songId: number) {
    return this.songLyricRepository.findOne({
      where: { song_id: songId },
    });
  }

  async add(dto: CreateSongLyricDto) {
    return await this.songLyricRepository.save(dto);
  }

  //   async update(id: number, dto: UpdateSongLyricDto) {
  //     await this.songLyricRepository.update(id, dto);
  //   }
}
