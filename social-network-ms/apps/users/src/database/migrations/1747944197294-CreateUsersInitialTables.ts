import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersInitialTables1747944197294 implements MigrationInterface {
    name = 'CreateUsersInitialTables1747944197294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profiles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "birthDate" date NOT NULL, "alias" character varying NOT NULL, CONSTRAINT "UQ_6b38357227669e47e349a58a121" UNIQUE ("alias"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "profiles"`);
    }

}
