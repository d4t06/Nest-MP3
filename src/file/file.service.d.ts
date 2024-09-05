import { FirebaseService } from 'src/firebase/firebase.service';
export declare class FileService {
    private readonly firebaseService;
    constructor(firebaseService: FirebaseService);
    upload(file: Express.Multer.File): Promise<{
        filePath: string;
        url: string;
    }>;
}
