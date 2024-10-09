import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSongDto } from './entities/dtos/create-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';
import { UpdateSongDto } from './entities/dtos/update-song.dto';
import { SongLyric } from 'src/song-lyric/entities/song-lyric.entity';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,

    @InjectRepository(SongLyric)
    private readonly songLyricRepository: Repository<SongLyric>,
  ) {}

  async findAll() {
    const [songs, count] = await this.songRepository.findAndCount({
      order: {
        name: 'ASC',
      },
    });

    return { songs, count };
  }

  async findOne(songId: number) {
    return await this.songRepository.findOne({
      where: { id: songId },
      relations: { song_lyric: true },
    });
  }

  async create(dto: CreateSongDto) {
    const newSong = await this.songRepository.save(dto);

    await this.songLyricRepository.save({
      base_lyric: '',
      song_id: newSong.id,
    });

    return newSong;
  }

  async update(id: number, dto: UpdateSongDto) {
    return await this.songRepository.update(id, dto);
  }

  async delete(id: number) {
    const founded = await this.songRepository.findOne({ where: { id } });

    if (!founded) throw new NotFoundException('');

    // await this.firebaseService.deleteFile(founded.song_file_path);
    await this.songRepository.delete(id);
  }
}
