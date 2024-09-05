import { FirebaseService } from 'src/firebase/firebase.service';
import { CreateSongDto } from './entities/dtos/create-song.dto';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';
import { UpdateSongDto } from './entities/dtos/update-song.dto';
export declare class SongService {
    private readonly songRepository;
    private readonly firebaseService;
    constructor(songRepository: Repository<Song>, firebaseService: FirebaseService);
    findAll(): Promise<{
        songs: Song[];
        count: number;
    }>;
    create(dto: CreateSongDto): Promise<CreateSongDto & Song>;
    update(id: number, dto: UpdateSongDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
