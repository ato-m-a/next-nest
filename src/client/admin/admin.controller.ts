import { Controller, Post, Get, Delete, Req, Res, Body, Session, Render, Next } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';

/* Service */

/* DTO */

@Controller()
export class AdminController {
  @Get()
  public AdminIndex(@Session() session: Record<string, any>, @Res() res: Response) {
    // 세션 있으면 메인 메뉴로 보냄
    if (session && session.auth) {
      return res.redirect('/admin/category');
    // 세션 없으면 로그인 페이지로 리디렉트
    } else {
      return res.redirect('/admin/signin')
    }
  }

  /* 로그인 페이지 */
  @Render('admin/signin')
  @Get('/signin')
  public SignIn() {
    return {};
  }

  /* 계정 생성 페이지 */
  @Render('admin/signup')
  @Get('/signup')
  public SignUp(@Session() session: Record<string, any>, @Req() req: Request, @Res() res: Response) {
    /* 프로덕션 환경 */
    if (process.env.NODE_ENV === 'production') {
      // 슈퍼 유저 IP면
      if (getClientIp(req) === process.env.SUPER_USER) {
        return {};
      } else {
        return res.redirect('/admin');
      }
    /* 개발 환경 */
    } else {
      return {};
    }
  }
}