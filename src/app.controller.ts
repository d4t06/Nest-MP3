import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomResponse } from './system/custom-response/custom-response.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CustomResponse('This is custom res')
  getHello(): string {
    return this.appService.getHello();
  }
}
