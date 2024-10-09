import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './entities/dtos/create-song.dto';
import { CustomResponse } from 'src/system/custom-response/custom-response.decorator';
import { UpdateSongDto } from './entities/dtos/update-song.dto';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  @CustomResponse('Get all songs successful')
  findAll() {
    return this.songService.findAll();
  }

  @Get(':song_id')
  @CustomResponse('Get all songs successful')
  findOneById(@Param("song_id", ParseIntPipe) songId: number) {
    return this.songService.findOne(songId)
  }

  @Get('search')
  @CustomResponse('Search song success ful')
  search() {
    return 'Search route';
  }

  @Post()
  @CustomResponse('Create song successful')
  // @UsePipes(new ValidationPipe())
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }

  @Put(':id')
  // @UsePipes(ValidationPipe)
  edit(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSongDto) {
    return this.songService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.songService.delete(id);
  }
}
