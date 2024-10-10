import { Repository } from 'typeorm';
import { Lyric } from './entities/lyric.entity';
import { CreateLyricDto } from './entities/dtos/create-lyric.dto';
import { UpdateLyricDto } from './entities/dtos/update-lyric.dto';
export declare class LyricService {
    private readonly lyricRepository;
    constructor(lyricRepository: Repository<Lyric>);
    add(dto: CreateLyricDto[]): Promise<(CreateLyricDto & Lyric)[]>;
    update(id: number, dto: UpdateLyricDto): Promise<import("typeorm").UpdateResult>;
}
