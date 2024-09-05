import { SongService } from './song.service';
import { CreateSongDto } from './entities/dtos/create-song.dto';
import { UpdateSongDto } from './entities/dtos/update-song.dto';
export declare class SongController {
    private readonly songService;
    constructor(songService: SongService);
    findAll(): Promise<{
        songs: import("./entities/song.entity").Song[];
        count: number;
    }>;
    search(): string;
    create(createSongDto: CreateSongDto): Promise<CreateSongDto & import("./entities/song.entity").Song>;
    edit(id: number, dto: UpdateSongDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
