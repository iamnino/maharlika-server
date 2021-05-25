import { MigrationInterface, QueryRunner} from "typeorm";

export class createUsersTable1621855517133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE users (
                id INT NOT NULL,
                name VARCHAR(45) NULL,
                birthday VARCHAR(45) NULL,
                PRIMARY KEY (id));
            `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS user;
        `);
    }

}
