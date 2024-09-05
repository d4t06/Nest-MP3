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
exports.SongController = void 0;
const common_1 = require("@nestjs/common");
const song_service_1 = require("./song.service");
const create_song_dto_1 = require("./entities/dtos/create-song.dto");
const custom_response_decorator_1 = require("../system/custom-response/custom-response.decorator");
const update_song_dto_1 = require("./entities/dtos/update-song.dto");
let SongController = class SongController {
    constructor(songService) {
        this.songService = songService;
    }
    findAll() {
        return this.songService.findAll();
    }
    search() {
        return 'Search route';
    }
    create(createSongDto) {
        return this.songService.create(createSongDto);
    }
    edit(id, dto) {
        return this.songService.update(id, dto);
    }
    delete(id) {
        return this.songService.delete(id);
    }
};
exports.SongController = SongController;
__decorate([
    (0, common_1.Get)(),
    (0, custom_response_decorator_1.CustomResponse)('Get all songs successful'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, custom_response_decorator_1.CustomResponse)('Search song success ful'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongController.prototype, "search", null);
__decorate([
    (0, common_1.Post)(),
    (0, custom_response_decorator_1.CustomResponse)('Create song successful'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_song_dto_1.CreateSongDto]),
    __metadata("design:returntype", void 0)
], SongController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_song_dto_1.UpdateSongDto]),
    __metadata("design:returntype", void 0)
], SongController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SongController.prototype, "delete", null);
exports.SongController = SongController = __decorate([
    (0, common_1.Controller)('songs'),
    __metadata("design:paramtypes", [song_service_1.SongService])
], SongController);
//# sourceMappingURL=song.controller.js.map