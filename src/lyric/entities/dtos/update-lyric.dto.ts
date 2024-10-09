import { IsNotEmpty } from 'class-validator';

export class UpdateLyricDto {
  @IsNotEmpty()
  start: number;

  @IsNotEmpty()
  text: string;
}
