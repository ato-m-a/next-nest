import { NestFactory } from '@nestjs/core';
import { AppModule } from './application.module';
import session from 'express-session';
import * as dotenv from 'dotenv';
import { urlencoded, json } from 'express';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  server.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24*60*60,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true
      }
    })
  );

  server.use(
    urlencoded({
      limit: '50mb',
      parameterLimit: 100000,
      extended: true
    })
  );

  server.use(
    json({
      limit: '50mb'
    })
  );

  await server.listen(3000);
}

bootstrap();
