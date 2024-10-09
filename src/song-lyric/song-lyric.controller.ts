import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongLyricService } from './song-lyric.service';
import { CreateLyricDto } from 'src/lyric/entities/dtos/create-lyric.dto';
import { LyricService } from 'src/lyric/lyric.service';
import { UpdateSongLyricDto } from './entities/dtos/update-song-lyric.dto';
import { UpdateLyricDto } from 'src/lyric/entities/dtos/update-lyric.dto';
import { CreateSongLyricDto } from './entities/dtos/create-song-lyric.dto';
import { retry } from 'rxjs';

@Controller('song-lyrics')
export class SongLyricController {
  constructor(
    private readonly songLyricService: SongLyricService,
    private readonly lyricService: LyricService,
  ) {}

  @Get(':songId')
  getSongLyric(@Param('songId', ParseIntPipe) songId: number) {
    return 'song lyric';
  }

  @Post()
  addBaseLyric(@Body() dto: CreateSongLyricDto) {
    return this.songLyricService.add(dto);
  }

  @Put(':id')
  updateBaseLyric(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSongLyricDto,
  ) {
    return this.songLyricService.update(id, dto);
  }

  @Post('lyrics')
  addLyrics(
    @Body()
    body: CreateLyricDto[],
  ) {
    return this.lyricService.add(body);
  }

  @Put('lyrics/:id')
  updateLyric(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateLyricDto,
  ) {
    this.lyricService.update(id, dto);
  }
}
