import { DataSource } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';
import * as dotenv from 'dotenv';
import { Post } from './entities/post.entity';

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
  entities: [Post],
  migrationsTableName: 'migrations',
  migrations: ['apps/posts/src/database/migrations/*.ts'],
  seeds: [],
};

export const dataSource = new DataSource(options);