import { AuthService } from './auth.service';
declare class SignInDto {
    password: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        token: string;
    }>;
}
export {};
