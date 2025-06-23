import { Injectable } from '@nestjs/common';
import ImageKit from 'imagekit';

@Injectable()
export class StorageService {
	private imagekit: ImageKit;

	constructor() {
		this.imagekit = new ImageKit({
			publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
			privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
			urlEndpoint: 'https://ik.imagekit.io/rzqxwvwoc',
		});
	}

	async auth() {
		const { token, expire, signature } =
			this.imagekit.getAuthenticationParameters();

		return {
			token,
			expire,
			signature,
			publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
		};
	}

	async delete(fileId: string) {
		await this.imagekit.deleteFile(fileId);
	}
}
