"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const TOKEN_EXPIRED = '1h';
const REFRESH_EXPIRED = '1d';
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async signIn(password) {
        console.log('check pass', password);
        if (!password || password !== process.env.ADMIN_PASS) {
            throw new common_1.UnauthorizedException();
        }
        const newToken = await this.jwtService.signAsync({}, { expiresIn: TOKEN_EXPIRED });
        const newRefreshToken = await this.jwtService.signAsync({}, { expiresIn: REFRESH_EXPIRED });
        return {
            token: newToken,
            refresh_token: newRefreshToken,
        };
    }
    async refreshToken(token) {
        try {
            if (!token)
                throw new common_1.UnauthorizedException();
            await this.jwtService.verify(token);
            const newToken = await this.jwtService.signAsync({}, { expiresIn: TOKEN_EXPIRED });
            return {
                token: newToken,
            };
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map