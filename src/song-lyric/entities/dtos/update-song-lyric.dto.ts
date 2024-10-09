import { IsNotEmpty } from 'class-validator';

export class UpdateSongLyricDto {
  @IsNotEmpty()
  base_lyric: string;

  @IsNotEmpty()
  lyrics: string;
}
