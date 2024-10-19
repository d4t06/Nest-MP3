import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SongLyricService } from './song-lyric.service';
import { CreateSongLyricDto } from './entities/dtos/create-song-lyric.dto';
import { CustomResponse } from 'src/system/custom-response/custom-response.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('song-lyrics')
export class SongLyricController {
  constructor(private readonly songLyricService: SongLyricService) {}

  @Get()
  @CustomResponse('Get song lyric successful')
  getSongLyric(@Query('song_id', ParseIntPipe) songId: number) {
    return this.songLyricService.findBySongId(songId);
  }

  @Post()
  @UseGuards(AuthGuard)
  @CustomResponse('Add  lyric successful')
  addBaseLyric(@Body() dto: CreateSongLyricDto) {
    return this.songLyricService.add(dto);
  }

  //   @Put(':id')
  //   @CustomResponse('Update  lyric successful')
  //   updateBaseLyric(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Body() dto: UpdateSongLyricDto,
  //   ) {
  //     return this.songLyricService.update(id, dto);
  //   }

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
