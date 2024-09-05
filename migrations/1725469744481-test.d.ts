import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Test1725469744481 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
