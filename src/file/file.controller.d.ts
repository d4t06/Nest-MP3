import { FileService } from './file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    upload(file: any): Promise<{
        filePath: string;
        url: string;
    }>;
}
