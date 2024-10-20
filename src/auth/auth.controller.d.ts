import { AuthService } from './auth.service';
declare class SignInDto {
    password: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        token: string;
        refresh_token: string;
    }>;
    refreshToken(body: {
        refresh_token: string;
    }): Promise<{
        token: string;
    }>;
}
export {};
