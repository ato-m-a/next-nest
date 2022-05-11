import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    process.env.NODE_ENV !== 'production'
    ? "src/api/**/*.entity.ts"
    : __dirname + '/**/*.entity.{js, ts}'
  ],
  synchronize: process.env.NODE_ENV !== 'production'
}

export default ormconfig;