import { UseInterceptors } from '@nestjs/common';
import { CustomResponseInterceptor } from './custom-response.interceptor';

export function CustomResponse(message: string) {
  return UseInterceptors(new CustomResponseInterceptor(message));
}
