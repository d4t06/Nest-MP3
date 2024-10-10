"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1728476144229 = void 0;
class Test1728476144229 {
    constructor() {
        this.name = 'Test1728476144229';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`Song_Lyrics\` (\`id\` int NOT NULL AUTO_INCREMENT, \`base_lyric\` text NOT NULL, \`lyrics\` text NOT NULL, \`song_id\` int NOT NULL, UNIQUE INDEX \`REL_6a7446e428a291df248adb45fb\` (\`song_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Song_Lyrics\` ADD CONSTRAINT \`FK_6a7446e428a291df248adb45fb4\` FOREIGN KEY (\`song_id\`) REFERENCES \`Songs\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`Song_Lyrics\` DROP FOREIGN KEY \`FK_6a7446e428a291df248adb45fb4\``);
        await queryRunner.query(`DROP INDEX \`REL_6a7446e428a291df248adb45fb\` ON \`Song_Lyrics\``);
        await queryRunner.query(`DROP TABLE \`Song_Lyrics\``);
    }
}
exports.Test1728476144229 = Test1728476144229;
//# sourceMappingURL=1728476144229-test.js.map