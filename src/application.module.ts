import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { RouterModule } from 'nest-router';
import Next from 'next';

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
    RouterModule.forRoutes(routes),
    // Client Page Rendering Module
    ClientModule,
    // Server API Module
    ApiModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
