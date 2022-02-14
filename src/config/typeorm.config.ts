import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHAME,
  autoLoadEntities: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'dist/migrations/*.js',
  },
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
  dropSchema: false,
  migrationsRun: true,
  logging: true,
};

export default typeOrmConfig;
