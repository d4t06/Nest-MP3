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
exports.SongLyricService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const song_lyric_entity_1 = require("./entities/song-lyric.entity");
const typeorm_2 = require("typeorm");
let SongLyricService = class SongLyricService {
    constructor(songLyricRepository) {
        this.songLyricRepository = songLyricRepository;
    }
    async findBySongId(songId) {
        return this.songLyricRepository.findOne({
            where: { song_id: songId },
        });
    }
    async add(dto) {
        return this.songLyricRepository.save(dto);
    }
    async update(id, dto) {
        await this.songLyricRepository.update(id, dto);
    }
};
exports.SongLyricService = SongLyricService;
exports.SongLyricService = SongLyricService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(song_lyric_entity_1.SongLyric)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SongLyricService);
//# sourceMappingURL=song-lyric.service.js.map