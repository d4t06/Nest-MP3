import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsNotEmpty } from 'class-validator';
import { CustomResponse } from 'src/system/custom-response/custom-response.decorator';

class SignInDto {
  @IsNotEmpty()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @CustomResponse('Login successful')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.password);
  }

  @Post('/refresh')
  @CustomResponse('Refresh token successful')
  refreshToken(@Body() body: { refresh_token: string }) {
    return this.authService.refreshToken(body.refresh_token);
  }
}
