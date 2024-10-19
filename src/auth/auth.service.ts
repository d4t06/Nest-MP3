import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const TOKEN_EXPIRED = '1h';
const REFRESH_EXPIRED = '1d';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async signIn(password: string) {
    console.log('check pass', password);

    if (!password || password !== process.env.ADMIN_PASS) {
      throw new UnauthorizedException();
    }

    const newToken = await this.jwtService.signAsync(
      {},
      { expiresIn: TOKEN_EXPIRED },
    );
    const newRefreshToken = await this.jwtService.signAsync(
      {},
      { expiresIn: REFRESH_EXPIRED },
    );

    return {
      token: newToken,
      refresh_token: newRefreshToken,
    };
  }


  async refreshToken(token: string) {
    try {
      if (!token) throw new UnauthorizedException();

      await this.jwtService.verify(token);

      const newToken = await this.jwtService.signAsync(
        {},
        { expiresIn: TOKEN_EXPIRED },
      );

      return {
        token: newToken,
      };
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
