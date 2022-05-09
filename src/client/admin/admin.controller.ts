import { Controller, Post, Get, Delete, Req, Res, Body, Session, Render } from '@nestjs/common';
import { Request, Response } from 'express';

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
  public SignIn() {
    return {};
  }
}