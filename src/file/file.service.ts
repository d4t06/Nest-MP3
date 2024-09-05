import { Injectable } from '@nestjs/common';
// import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class FileService {
  constructor(
    private readonly firebaseService: FirebaseService,
   //  private readonly cloudinaryService: CloudinaryService,
  ) {}

  upload(file: Express.Multer.File) {
     return this.firebaseService.uploadFile(file);
   //  return this.cloudinaryService.uploadFile(file);
  }
}
