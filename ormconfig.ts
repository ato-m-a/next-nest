import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

/* entities */
import { Auth } from './src/api/auth/auth.entity';
import { Menu } from './src/api/menu/menu.entity';
import { Page } from './src/api/page/page.entity';

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
  synchronize: true
}

export default ormconfig;