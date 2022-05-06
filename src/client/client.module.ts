/* 페이지 렌더링을 맡는 서버 모듈입니다 */
import { Module } from '@nestjs/common';

/* controller */

/* module */
import { AdminModule } from './admin/admin.module';
import { AboutModule } from './about/about.module';

@Module({
  imports: [AdminModule, AboutModule],
  controllers: []
})
export class ClientModule {}
