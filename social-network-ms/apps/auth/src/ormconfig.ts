import { DataSource } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';
import * as dotenv from 'dotenv';
import UserTestSeeder from './database/seeders/user-test.seeder';
import { User } from './entities/user.entity';

dotenv.config();

export const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  logging: false,
  synchronize: false,
  entities: [User],
  migrationsTableName: 'migrations',
  migrations: ['apps/auth/src/database/migrations/*.ts'],
  seeds: [UserTestSeeder],
};

export const dataSource = new DataSource(options);
