import { Song } from 'src/song/entities/song.entity';
export declare class SongLyric {
    id: number;
    base_lyric: string;
    lyrics: string;
    song_id: number;
    song: Song;
    constructor(item: Partial<SongLyric>);
}
