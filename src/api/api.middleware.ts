import { Injectable, NestMiddleware } from '@nestjs/common';

/* API Session Middleware */
@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): any {
    if (req.session && req.session.auth) {
      next();
    } else {
      // 세션 없으면 403 forbidden return
      res.status(403).send('access denied for empty session');
    }
  }
}