import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class SongService {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly firebaseService: FirebaseService,
  ) {}

  upload(file: Express.Multer.File) {
    // this.cloudinaryService.uploadFile(file);
    this.firebaseService.uploadFile(file);
  }
}
