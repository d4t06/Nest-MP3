export declare class FirebaseService {
    constructor();
    uploadFile(file: Express.Multer.File): Promise<{
        filePath: string;
        url: string;
    }>;
    deleteFile(filePath: string): Promise<[import("teeny-request").Response<any>]>;
}
