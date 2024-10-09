import { SongLyric } from 'src/song-lyric/entities/song-lyric.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Songs' })
export class Song {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  singer: string;
  @Column({ nullable: true })
  image_url: string;
  @Column({ nullable: true })
  image_file_path: string;
  @Column()
  song_url: string;
  @Column()
  song_file_path: string;
  @Column()
  duration: number;
  @Column()
  size: number;

  /** */
  @OneToOne(() => SongLyric, (l) => l.song)
  song_lyric: SongLyric;

  constructor(item: Partial<Song>) {
    Object.assign(this, item);
  }
}
