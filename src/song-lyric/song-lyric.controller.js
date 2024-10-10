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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongLyricController = void 0;
const common_1 = require("@nestjs/common");
const song_lyric_service_1 = require("./song-lyric.service");
const create_song_lyric_dto_1 = require("./entities/dtos/create-song-lyric.dto");
const custom_response_decorator_1 = require("../system/custom-response/custom-response.decorator");
const auth_guard_1 = require("../auth/guards/auth.guard");
let SongLyricController = class SongLyricController {
    constructor(songLyricService) {
        this.songLyricService = songLyricService;
    }
    getSongLyric(songId) {
        return this.songLyricService.findBySongId(songId);
    }
    addBaseLyric(dto) {
        return this.songLyricService.add(dto);
    }
};
exports.SongLyricController = SongLyricController;
__decorate([
    (0, common_1.Get)(),
    (0, custom_response_decorator_1.CustomResponse)('Get song lyric successful'),
    __param(0, (0, common_1.Query)('song_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SongLyricController.prototype, "getSongLyric", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, custom_response_decorator_1.CustomResponse)('Add  lyric successful'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_song_lyric_dto_1.CreateSongLyricDto]),
    __metadata("design:returntype", void 0)
], SongLyricController.prototype, "addBaseLyric", null);
exports.SongLyricController = SongLyricController = __decorate([
    (0, common_1.Controller)('song-lyrics'),
    __metadata("design:paramtypes", [song_lyric_service_1.SongLyricService])
], SongLyricController);
//# sourceMappingURL=song-lyric.controller.js.map