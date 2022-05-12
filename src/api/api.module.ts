/* API 서버 모듈입니다 */
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

/* routes modules */
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { PageModule } from './page/page.module';

/* Middleware */
import { SessionMiddleware } from './api.middleware';

/* orm config */
import ormconfig from '../../ormconfig';

/* entities */
import { Menu } from './menu/menu.entity';
import { Page } from './page/page.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule, 
    MenuModule,
    PageModule,
    TypeOrmModule.forFeature([Menu]),
    TypeOrmModule.forFeature([Page])
  ],
  controllers: [ApiController],
  providers: [ApiService],
  exports: [ApiService]
})
export class ApiModule {
  constructor(private connection: Connection) {}
  configure(session: MiddlewareConsumer): any {
    session
      .apply(SessionMiddleware)
      .exclude(
        { path: '/api/auth/signin', method: RequestMethod.POST },
        { path: '/api/auth/signup', method: RequestMethod.POST },
        { path: '/api/query', method: RequestMethod.GET }
      )
      .forRoutes('api/*')
  }
}
