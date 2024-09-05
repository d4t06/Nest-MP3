import { IsNotEmpty } from 'class-validator';

export class CreateSongDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  singer: string;

  image_url: string;
  image_file_path: string;

  @IsNotEmpty()
  song_url: string;
  @IsNotEmpty()
  song_file_path: string;
  @IsNotEmpty()
  duration: number;
  @IsNotEmpty()
  size: number;
}
