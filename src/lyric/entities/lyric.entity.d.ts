import { Song } from 'src/song/entities/song.entity';
export declare class Lyric {
    id: number;
    song_lyric_id: number;
    song: Song;
    start: number;
    text: string;
    constructor(item: Partial<Lyric>);
}
