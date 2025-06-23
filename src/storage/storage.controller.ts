import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CustomResponse } from 'src/system/custom-response/custom-response.decorator';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {

		constructor(private readonly storageSerice: StorageService) {}

	@Get('/auth')
	@UseGuards(AuthGuard)
	getAuth() {
		return this.storageSerice.auth();
	}

	@Delete(':file_id')
	@UseGuards(AuthGuard)
	@CustomResponse('Delete file successful')
	delete(@Param('file_id') fileId: string) {
		return this.storageSerice.delete(fileId);
	}
}
