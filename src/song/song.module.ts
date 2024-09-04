import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FirebaseService } from 'src/firebase/firebase.service';

@Module({
  controllers: [SongController],
  providers: [SongService, CloudinaryService, FirebaseService]
})
export class SongModule {}
