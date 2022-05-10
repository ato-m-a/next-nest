import { NestFactory } from '@nestjs/core';
import { AppModule } from './application.module';
import session from 'express-session';
import * as dotenv from 'dotenv';
import { urlencoded, json } from 'express';
import { ValidationPipe } from '@nestjs/common';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  /* Session */
  server.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      cookie: {
        maxAge: 86400000, // ms단위 (하루)
        secure: process.env.NODE_ENV === 'production',
        httpOnly: process.env.NODE_ENV === 'production'
      }
    })
  );
  
  /* Global Validation Pipe */
  server.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }));

  // bodyParser.urlencoded
  server.use(
    urlencoded({
      limit: '50mb',
      parameterLimit: 100000,
      extended: true
    })
  );

  // bodyParser.json
  server.use(
    json({
      limit: '50mb'
    })
  );
  
  // 3000 port, Ipv4 listener
  await server.listen(3000, '0.0.0.0');
}

// app init
bootstrap();
