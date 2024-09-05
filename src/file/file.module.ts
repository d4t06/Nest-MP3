import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { FirebaseModule } from 'src/firebase/firebase.module';
// import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [FirebaseModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
