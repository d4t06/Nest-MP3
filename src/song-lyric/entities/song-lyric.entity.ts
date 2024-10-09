import { Lyric } from 'src/lyric/entities/lyric.entity';
import { Song } from 'src/song/entities/song.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Song_Lyrics' })
export class SongLyric {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  song_id: number;

  @Column()
  base_lyric: string;

  @OneToOne(() => Song, (s) => s.song_lyric, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'song_id' })
  song: Song;

  @OneToMany(() => Lyric, (l) => l.song, { onDelete: 'CASCADE' })
  lyrics: Lyric[];

  constructor(item: Partial<SongLyric>) {
    Object.assign(this, item);
  }
}
