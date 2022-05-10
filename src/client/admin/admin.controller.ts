import { Controller, Post, Get, Delete, Req, Res, Body, Session, Render, Next } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';

/* Service */

/* DTO */

@Controller('admin')
export class AdminController {
  /* 세션 테스트용 */
  @Render('admin')
  @Get()
  public AdminIndex(@Session() session: Record<string, any>) {
    const result: string = session.auth ? session.auth.ID : 'Guest';
    return { result };
  }

  /* 로그인 페이지 */
  @Render('admin/signin')
  @Get('/signin')
  public SignIn(@Next() next: () => void) {
    next();
  }

  /* 계정 생성 페이지 */
  @Render('admin/signup')
  @Get('/signup')
  public SignUp(@Session() session: Record<string, any>, @Req() req: Request, @Res() res: Response, @Next() next: () => void) {
    /* 프로덕션 환경 */
    if (process.env.NODE_ENV === 'production') {
      // 슈퍼 유저 IP면
      if (getClientIp(req) === process.env.SUPER_USER) {
        next();
      } else {
        res.redirect('/admin');
      }
    /* 개발 환경 */
    } else {
      next();
    }
  }
}