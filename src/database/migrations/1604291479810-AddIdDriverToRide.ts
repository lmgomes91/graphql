import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddIdDriverToRide1604291479810 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "rides",
      new TableColumn({
        name: "id_driver",
        type: "integer",
        isNullable: true,
      })
    );
    await queryRunner.createForeignKey(
      "rides",
      new TableForeignKey({
        name: "RideDriver",
        columnNames: ["id_driver"],
        referencedColumnNames: ["id"],
        referencedTableName: "drivers",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("drivers", "RideDriver");

    await queryRunner.dropColumn("drivers", "id_driver");
  }
}
