import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CustomResponseInterceptor } from 'src/system/custom-response/custom-response.interceptor';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
    }),
    new CustomResponseInterceptor('Upload file successful'),
  )
  upload(@UploadedFile() file) {
    return this.fileService.upload(file);
  }
}
