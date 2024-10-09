import { Song } from 'src/song/entities/song.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Lyrics' })
export class Lyric {
  @PrimaryGeneratedColumn()
  id: number;

  /** */
  @Column({ nullable: false })
  song_lyric_id: number;

  @ManyToOne(() => Song, (s) => s.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'song_id' })
  song: Song;

  @Column()
  start: number;

  @Column()
  text: string;

  constructor(item: Partial<Lyric>) {
    Object.assign(this, item);
  }
}
