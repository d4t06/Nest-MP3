import { CreateSongDto } from './entities/dtos/create-song.dto';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';
import { UpdateSongDto } from './entities/dtos/update-song.dto';
import { SongLyric } from 'src/song-lyric/entities/song-lyric.entity';
export declare class SongService {
    private readonly songRepository;
    private readonly songLyricRepository;
    constructor(songRepository: Repository<Song>, songLyricRepository: Repository<SongLyric>);
    findAll(): Promise<{
        songs: Song[];
        count: number;
    }>;
    findOne(songId: number): Promise<Song>;
    create(dto: CreateSongDto): Promise<CreateSongDto & Song>;
    update(id: number, dto: UpdateSongDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
