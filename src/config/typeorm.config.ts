import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PW || 'admin',
  database: process.env.DB_NAME || 'studistore',
  schema: process.env.DB_SCHAME || 'public',
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
