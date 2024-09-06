import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSongDto } from './entities/dtos/create-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';
import { UpdateSongDto } from './entities/dtos/update-song.dto';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
  ) {}

  async findAll() {
    const [songs, count] = await this.songRepository.findAndCount({
      order: {
        name: 'ASC',
      },
    });

    return { songs, count };
  }

  create(dto: CreateSongDto) {
    return this.songRepository.save(dto);
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
