import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    signIn(password: string): Promise<{
        token: string;
    }>;
}
