import { SongLyric } from './entities/song-lyric.entity';
import { Repository } from 'typeorm';
import { UpdateSongLyricDto } from './entities/dtos/update-song-lyric.dto';
import { CreateSongLyricDto } from './entities/dtos/create-song-lyric.dto';
export declare class SongLyricService {
    private readonly songLyricRepository;
    constructor(songLyricRepository: Repository<SongLyric>);
    findBySongId(songId: number): Promise<SongLyric>;
    add(dto: CreateSongLyricDto): Promise<CreateSongLyricDto & SongLyric>;
    update(id: number, dto: UpdateSongLyricDto): Promise<void>;
}
