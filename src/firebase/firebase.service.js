"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const helper_1 = require("../utils/helper");
const folder = 'test';
const storageUrl = `https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/${folder}%2F`;
let FirebaseService = class FirebaseService {
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
    async uploadFile(file) {
        const { buffer, mimetype, originalname } = file;
        const start = new Date();
        const bucket = admin.storage().bucket();
        const filename = `${(0, helper_1.convertToEn)(originalname)}_${Date.now()}`;
        const filePath = `${folder}/${filename}`;
        const bucketFile = bucket.file(filePath);
        await bucketFile.save(buffer, {
            contentType: mimetype,
        });
        const res = await bucketFile.getSignedUrl({
            action: 'read',
            expires: '01-01-2050',
        });
        console.log('upload file finish after ', (new Date().getTime() - start.getTime()) / 1000, 's');
        return {
            filePath,
            url: `${storageUrl}${filename}?alt=media`,
        };
    }
    async deleteFile(filePath) {
        const bucket = admin.storage().bucket();
        return await bucket.file(filePath).delete();
    }
};
exports.FirebaseService = FirebaseService;
exports.FirebaseService = FirebaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseService);
//# sourceMappingURL=firebase.service.js.map