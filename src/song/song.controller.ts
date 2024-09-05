import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './entities/dtos/create-song.dto';
import { CustomResponse } from 'src/system/custom-response/custom-response.decorator';
import { UpdateSongDto } from './entities/dtos/update-song.dto';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('size') size: string = '12',
  ) {}

  @Post()
  @CustomResponse('Create song success ful')
  create(@Body() dto: CreateSongDto) {
    return this.songService.create(dto);
  }

  @Put('id:number')
  edit(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSongDto) {}

  @Delete('id: number')
  delete() {}
}
