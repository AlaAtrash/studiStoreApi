import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class products1645616920345 implements MigrationInterface {
  products = new Table({
    name: 'products',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'img',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'description',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'price',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'ref',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'age',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'nbPlayers',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'timing',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'video',
        type: 'varchar',
        isNullable: true,
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(this.products, true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(this.products,true)
  }
}
