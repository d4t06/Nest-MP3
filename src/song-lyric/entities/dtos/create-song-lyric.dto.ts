import { IsNotEmpty } from 'class-validator';

export class CreateSongLyricDto {
  id: number;

  @IsNotEmpty()
  song_id: number;

  base_lyric: string;

  @IsNotEmpty()
  lyrics: string;
}
