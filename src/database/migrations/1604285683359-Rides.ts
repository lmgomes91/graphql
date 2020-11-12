import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Rides1604285683359 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "rides",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "from",
            type: "varchar",
            length: "50",
          },
          {
            name: "to",
            type: "varchar",
            length: "50",
          },
          {
            name: "value",
            type: "numeric",
          },
          {
            name: "date_creation",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("rides");
  }
}
