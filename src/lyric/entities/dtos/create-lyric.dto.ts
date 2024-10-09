import { IsNotEmpty } from 'class-validator';

export class CreateLyricDto {
  @IsNotEmpty()
  song_lyric_id: number;

  @IsNotEmpty()
  start: number;

  @IsNotEmpty()
  text: string;
}
