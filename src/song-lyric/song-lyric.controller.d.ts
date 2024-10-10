import { SongLyricService } from './song-lyric.service';
import { CreateSongLyricDto } from './entities/dtos/create-song-lyric.dto';
export declare class SongLyricController {
    private readonly songLyricService;
    constructor(songLyricService: SongLyricService);
    getSongLyric(songId: number): Promise<import("./entities/song-lyric.entity").SongLyric>;
    addBaseLyric(dto: CreateSongLyricDto): Promise<CreateSongLyricDto & import("./entities/song-lyric.entity").SongLyric>;
}
