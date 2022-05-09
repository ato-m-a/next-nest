import { Injectable, NestMiddleware } from '@nestjs/common';

/* admin 페이지 접근할 때 세션 확인 */
@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): any {
    if (req.session && req.session.auth) {
      next();
    } else {
      // 세션 없으면 로그인 페이지로 리디렉트
      res.redirect('/admin/signin');
    }
  }
}