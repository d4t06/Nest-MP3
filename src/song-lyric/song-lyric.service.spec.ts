import { Test, TestingModule } from '@nestjs/testing';
import { SongLyricService } from './song-lyric.service';

describe('SongLyricService', () => {
  let service: SongLyricService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongLyricService],
    }).compile();

    service = module.get<SongLyricService>(SongLyricService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
