import { v2 } from 'cloudinary';

export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
    });
  }

  async uploadFile(file: Express.Multer.File) {
    const { buffer, mimetype } = file;

    const start = new Date();

    const b64 = Buffer.from(buffer).toString('base64');
     let dataURI = 'data:' + mimetype + ';base64,' + b64;

    const res = await v2.uploader.upload(dataURI, {
      folder: 'next-mp3',
      resource_type: 'auto',
    });

    console.log(
      'check upload finish after ',
      (new Date().getTime() - start.getTime()) / 1000,
      's',
    );

    return res;

    // return imageUploadRes;
  }

  async deleteImage(public_id: string) {
    await v2.uploader.destroy(public_id);
  }
}
