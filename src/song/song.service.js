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
exports.SongService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const song_entity_1 = require("./entities/song.entity");
const typeorm_2 = require("typeorm");
let SongService = class SongService {
    constructor(songRepository) {
        this.songRepository = songRepository;
    }
    async findAll() {
        const [songs, count] = await this.songRepository.findAndCount({
            order: {
                name: 'ASC',
            },
        });
        return { songs, count };
    }
    create(dto) {
        return this.songRepository.save(dto);
    }
    async update(id, dto) {
        return await this.songRepository.update(id, dto);
    }
    async delete(id) {
        const founded = await this.songRepository.findOne({ where: { id } });
        if (!founded)
            throw new common_1.NotFoundException('');
        await this.songRepository.delete(id);
    }
};
exports.SongService = SongService;
exports.SongService = SongService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(song_entity_1.Song)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SongService);
//# sourceMappingURL=song.service.js.map