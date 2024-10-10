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
exports.Lyric = void 0;
const song_entity_1 = require("../../song/entities/song.entity");
const typeorm_1 = require("typeorm");
let Lyric = class Lyric {
    constructor(item) {
        Object.assign(this, item);
    }
};
exports.Lyric = Lyric;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lyric.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Lyric.prototype, "song_lyric_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => song_entity_1.Song, (s) => s.id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'song_id' }),
    __metadata("design:type", song_entity_1.Song)
], Lyric.prototype, "song", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Lyric.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lyric.prototype, "text", void 0);
exports.Lyric = Lyric = __decorate([
    (0, typeorm_1.Entity)({ name: 'Lyrics' }),
    __metadata("design:paramtypes", [Object])
], Lyric);
//# sourceMappingURL=lyric.entity.js.map