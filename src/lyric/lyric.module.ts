import { Module } from '@nestjs/common';
import { LyricService } from './lyric.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lyric } from './entities/lyric.entity';

@Module({
  providers: [LyricService],
  imports: [TypeOrmModule.forFeature([Lyric])],
  exports: [LyricService]
})
export class LyricModule {}
 