import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1728476144229 implements MigrationInterface {
    name = 'Test1728476144229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Song_Lyrics\` (\`id\` int NOT NULL AUTO_INCREMENT, \`base_lyric\` text NOT NULL, \`lyrics\` text NOT NULL, \`song_id\` int NOT NULL, UNIQUE INDEX \`REL_6a7446e428a291df248adb45fb\` (\`song_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Song_Lyrics\` ADD CONSTRAINT \`FK_6a7446e428a291df248adb45fb4\` FOREIGN KEY (\`song_id\`) REFERENCES \`Songs\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Song_Lyrics\` DROP FOREIGN KEY \`FK_6a7446e428a291df248adb45fb4\``);
        await queryRunner.query(`DROP INDEX \`REL_6a7446e428a291df248adb45fb\` ON \`Song_Lyrics\``);
        await queryRunner.query(`DROP TABLE \`Song_Lyrics\``);
    }

}
