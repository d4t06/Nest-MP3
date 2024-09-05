"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1725469744481 = void 0;
class Test1725469744481 {
    constructor() {
        this.name = 'Test1725469744481';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`Songs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`singer\` varchar(255) NOT NULL, \`image_url\` varchar(255) NULL, \`image_file_path\` varchar(255) NULL, \`song_url\` varchar(255) NOT NULL, \`song_file_path\` varchar(255) NOT NULL, \`duration\` int NOT NULL, \`size\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`Songs\``);
    }
}
exports.Test1725469744481 = Test1725469744481;
//# sourceMappingURL=1725469744481-test.js.map