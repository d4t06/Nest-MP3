import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FirebaseService } from 'src/firebase/firebase.service';
import { CreateSongDto } from './entities/dtos/create-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
    @Inject()
    private readonly firebaseService: FirebaseService,
  ) {}

  create(dto: CreateSongDto) {
    return this.songRepository.save(dto);
  }

  async delete(id: number) {
    const founded = await this.songRepository.findOne({ where: { id } });

    if (!founded) throw new NotFoundException('');

    await this.firebaseService.deleteFile(founded.song_file_path);
    await this.songRepository.delete(id);
  }
}
