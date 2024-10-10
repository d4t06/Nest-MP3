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

  @Column({ type: 'text' })
  base_lyric: string;

  // @OneToMany(() => Lyric, (l) => l.song, { onDelete: 'CASCADE' })
  @Column({ type: 'text' })
  lyrics: string;

  /** */
  @Column()
  song_id: number;

  @OneToOne(() => Song, (s) => s.song_lyric, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'song_id' })
  song: Song;

  constructor(item: Partial<SongLyric>) {
    Object.assign(this, item);
  }
}
