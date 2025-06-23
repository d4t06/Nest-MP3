export declare class StorageService {
    private imagekit;
    constructor();
    auth(): Promise<{
        token: string;
        expire: number;
        signature: string;
        publicKey: string;
    }>;
    delete(fileId: string): Promise<void>;
}
