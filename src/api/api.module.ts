/* API 서버 모듈입니다 */
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

/* API main controller */
import { ApiController } from './api.controller';

/* routes modules */
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { PageModule } from './page/page.module';

/* Middleware */
import { SessionMiddleware } from './api.middleware';

/* orm config */
import ormconfig from '../../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule, 
    MenuModule,
    PageModule
  ],
  controllers: [ApiController]
})
export class ApiModule {
  constructor(private connection: Connection) {}
  configure(session: MiddlewareConsumer): any {
    session
      .apply(SessionMiddleware)
      .exclude(
        { path: '/api/auth/signin', method: RequestMethod.POST },
        { path: '/api/auth/signup', method: RequestMethod.POST },
        { path: '/api/menu/query', method: RequestMethod.GET },
        { path: '/api/page/query', method: RequestMethod.GET }
      )
      .forRoutes('api/*')
  }
}
