import { SongLyric } from 'src/song-lyric/entities/song-lyric.entity';
export declare class Song {
    id: number;
    name: string;
    singer: string;
    image_url: string;
    image_file_path: string;
    song_url: string;
    song_file_path: string;
    duration: number;
    size: number;
    song_lyric: SongLyric;
    constructor(item: Partial<Song>);
}
