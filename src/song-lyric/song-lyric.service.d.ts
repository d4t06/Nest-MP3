import { SongLyric } from './entities/song-lyric.entity';
import { Repository } from 'typeorm';
import { CreateSongLyricDto } from './entities/dtos/create-song-lyric.dto';
export declare class SongLyricService {
    private readonly songLyricRepository;
    constructor(songLyricRepository: Repository<SongLyric>);
    findBySongId(songId: number): Promise<SongLyric>;
    add(dto: CreateSongLyricDto): Promise<CreateSongLyricDto & SongLyric>;
}
