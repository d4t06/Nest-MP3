import { IsNotEmpty } from 'class-validator';

export class CreateSongLyricDto {
  @IsNotEmpty()
  song_id: number;

  @IsNotEmpty()
  base_lyric: string;

  @IsNotEmpty()
  lyrics: string;
}
