import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';

/* Other Module */
import { PageModule } from './page/page.module';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';

/* Controller */
import { AppController } from './app.controller';
import { BlogController } from './blog/blog.controller';

/* Service */
import { BlogService } from './blog/blog.service';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        conf: { useFilesystemPublicRoutes: false },
      }),
    ),
    PageModule,
    ApiModule,
    AuthModule
  ],
  controllers: [AppController, BlogController],
  providers: [BlogService],
})
export class AppModule {}
