/* 페이지 렌더링을 맡는 서버 모듈입니다 */
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

/* controller */

/* module */
import { AdminModule } from './admin/admin.module';

/* Middleware */
import { SessionMiddleware } from './client.middleware';

@Module({
  imports: [AdminModule],
  controllers: []
})
export class ClientModule {
  configure(session: MiddlewareConsumer): any {
    session
      .apply(SessionMiddleware)
      .exclude(
        { path: '/admin/signin', method: RequestMethod.GET }
      )
      .forRoutes('/admin/*', '/admin')
  }
}
