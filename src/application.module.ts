import Next from 'next';
import { Module, ValidationPipe } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { RouterModule } from 'nest-router';
import { APP_PIPE } from '@nestjs/core';

/* winston logger */
import * as winston from 'winston';
import { utilities, WinstonModule } from 'nest-winston';

/* Other Module */
import { ClientModule } from './client/client.module';
import { ApiModule } from './api/api.module';

/* Controller */
import { AppController } from './app.controller';

/* Service */

/* Routes */
import { routes } from './routes'; 

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        conf: { useFilesystemPublicRoutes: false },
      }),
    ),
    // Router prefix
    RouterModule.forRoutes(routes),
    // Winston logger
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            utilities.format.nestLike('Log', { prettyPrint: true })
          )
        }),
        new (require('winston-daily-rotate-file'))({
          level: 'info',
          format: winston.format.combine(
            winston.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.printf(
              (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
            )
          ),
          filename: `logs/%DATE%.log`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '30d'
        }),
        new (require('winston-daily-rotate-file'))({
          level: 'error',
          format: winston.format.combine(
            winston.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.printf(
              (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
            )
          ),
          filename: `logs/error/%DATE%.error.log`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '30d'
        })
      ]
    }),
    // Client Page Rendering Module
    ClientModule,
    // Server API Module
    ApiModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule {}
