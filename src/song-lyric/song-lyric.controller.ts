import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SongLyricService } from './song-lyric.service';
// import { CreateLyricDto } from 'src/lyric/entities/dtos/create-lyric.dto';
// import { LyricService } from 'src/lyric/lyric.service';
import { UpdateSongLyricDto } from './entities/dtos/update-song-lyric.dto';
// import { UpdateLyricDto } from 'src/lyric/entities/dtos/update-lyric.dto';
import { CreateSongLyricDto } from './entities/dtos/create-song-lyric.dto';
import { CustomResponse } from 'src/system/custom-response/custom-response.decorator';

@Controller('song-lyrics')
export class SongLyricController {
  constructor(
    private readonly songLyricService: SongLyricService,
    // private readonly lyricService: LyricService,
  ) {}

  @Get()
  @CustomResponse('Get song lyric successful')
  getSongLyric(@Query('song_id', ParseIntPipe) songId: number) {
    return this.songLyricService.findBySongId(songId);
  }

  @Post()
  @CustomResponse('Add  lyric successful')
  addBaseLyric(@Body() dto: CreateSongLyricDto) {
    return this.songLyricService.add(dto);
  }

  @Put(':id')
  @CustomResponse('Update  lyric successful')
  updateBaseLyric(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSongLyricDto,
  ) {
    return this.songLyricService.update(id, dto);
  }

  // @Post('lyrics')
  // @CustomResponse("Add lyrics successful")
  // addLyrics(
  //   @Body()
  //   body: CreateLyricDto[],
  // ) {
  //   return this.lyricService.add(body);
  // }

  // @Put('lyrics/:id')
  // @CustomResponse("Update lyric successful")
  // updateLyric(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() dto: UpdateLyricDto,
  // ) {
  //   this.lyricService.update(id, dto);
  // }
}
