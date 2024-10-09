import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lyric } from './entities/lyric.entity';
import { CreateLyricDto } from './entities/dtos/create-lyric.dto';
import { UpdateLyricDto } from './entities/dtos/update-lyric.dto';

@Injectable()
export class LyricService {
  constructor(
    @InjectRepository(Lyric)
    private readonly lyricRepository: Repository<Lyric>,
  ) {}

  add(dto: CreateLyricDto[]) {
    return this.lyricRepository.save(dto);
  }

  update(id: number, dto: UpdateLyricDto) {
    return this.lyricRepository.update(id, dto);
  }
}
