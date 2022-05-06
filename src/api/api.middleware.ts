import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): any {
    if (req.session && req.session.auth) {
      next();
    } else {
      res.status(403).send('access denied for empty session');
    }
  }
}