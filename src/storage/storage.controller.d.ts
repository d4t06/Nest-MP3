import { StorageService } from './storage.service';
export declare class StorageController {
    private readonly storageSerice;
    constructor(storageSerice: StorageService);
    getAuth(): Promise<{
        token: string;
        expire: number;
        signature: string;
        publicKey: string;
    }>;
    delete(fileId: string): Promise<void>;
}
