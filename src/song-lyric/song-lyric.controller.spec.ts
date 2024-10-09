import { Test, TestingModule } from '@nestjs/testing';
import { SongLyricController } from './song-lyric.controller';

describe('SongLyricController', () => {
  let controller: SongLyricController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongLyricController],
    }).compile();

    controller = module.get<SongLyricController>(SongLyricController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
