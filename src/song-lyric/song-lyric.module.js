"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongLyricModule = void 0;
const common_1 = require("@nestjs/common");
const song_lyric_service_1 = require("./song-lyric.service");
const song_lyric_controller_1 = require("./song-lyric.controller");
const typeorm_1 = require("@nestjs/typeorm");
const song_lyric_entity_1 = require("./entities/song-lyric.entity");
const lyric_module_1 = require("../lyric/lyric.module");
let SongLyricModule = class SongLyricModule {
};
exports.SongLyricModule = SongLyricModule;
exports.SongLyricModule = SongLyricModule = __decorate([
    (0, common_1.Module)({
        providers: [song_lyric_service_1.SongLyricService],
        controllers: [song_lyric_controller_1.SongLyricController],
        imports: [lyric_module_1.LyricModule, typeorm_1.TypeOrmModule.forFeature([song_lyric_entity_1.SongLyric])],
    })
], SongLyricModule);
//# sourceMappingURL=song-lyric.module.js.map