import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY.replaceAll(/\\n/g, '\n'),
        projectId: process.env.PROJECT_ID,
      }),
      storageBucket: 'gs://zingmp3-clone-61799.appspot.com',
    });
  }

  async uploadFile(file: Express.Multer.File) {
    const { buffer, mimetype, originalname } = file;

    const start = new Date();

    const bucket = admin.storage().bucket();
    const bucketFile = bucket.file(`test/${originalname}`);

    await bucketFile.save(buffer, {
      contentType: mimetype,
    });

    // const res = await bucketFile.getSignedUrl({
    //   action: 'read',
    //   expires: '01-01-2050',
    // });

    console.log(
      'upload file finish after ',
      (new Date().getTime() - start.getTime()) / 1000,
      's',
    );

    // console.log(
    //   `https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2F${originalname}?alt=media`,
    // );
  }
}
