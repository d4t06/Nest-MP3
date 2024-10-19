import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './entities/dtos/create-song.dto';
import { CustomResponse } from 'src/system/custom-response/custom-response.decorator';
import { UpdateSongDto } from './entities/dtos/update-song.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

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
  findOneById(@Param('song_id', ParseIntPipe) songId: number) {
    return this.songService.findOne(songId);
  }

  @Get('search')
  @CustomResponse('Search song success ful')
  search() {
    return 'Search route';
  }

  @Post()
  @UseGuards(AuthGuard)
  @CustomResponse('Create song successful')
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  edit(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSongDto) {
    return this.songService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.songService.delete(id);
  }
}
