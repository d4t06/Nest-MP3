import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1725469744481 implements MigrationInterface {
    name = 'Test1725469744481'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Songs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`singer\` varchar(255) NOT NULL, \`image_url\` varchar(255) NULL, \`image_file_path\` varchar(255) NULL, \`song_url\` varchar(255) NOT NULL, \`song_file_path\` varchar(255) NOT NULL, \`duration\` int NOT NULL, \`size\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Songs\``);
    }

}
