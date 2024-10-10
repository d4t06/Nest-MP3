import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Test1728476144229 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
