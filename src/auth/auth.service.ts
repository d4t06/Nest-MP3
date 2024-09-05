import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async signIn(password: string) {
    if (password !== process.env.ADMIN_PASS) {
      throw new UnauthorizedException();
    }

    const newToken = await this.jwtService.signAsync({}, { expiresIn: '2d' });

    return {
      token: newToken,
    };
  }
}
