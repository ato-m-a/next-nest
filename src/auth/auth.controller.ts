import { Controller, Post, Get, Delete, Req, Res, Body, Session, Render } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';

/* Service */
import { AuthService } from './auth.service';

/* DTO */
import { SignInDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor (private AuthService: AuthService) {}

  /* 페이지 */
  @Render('auth')
  @Get()
  public auth() {
    return { result: 'dd' };
  }
  
  /* 로그인 */
  @Post('/signin')
  public async SignIn(@Req() req: Request, @Res() res: Response, @Session() session: Record<string, any>, @Body() dataset: SignInDto) {
    const response = await this.AuthService.SignIn(req, dataset);

    if (response.data) {
      session.auth = response.data;
      session.save();
    }

    res.status(response.status).json({ data: response.data });
  }

  /* 로그아웃 */
  @Delete('/signout')
  public async SignOut(@Req() req: Request, @Res() res: Response, @Session() session: Record<string, any>) {
    delete session.auth;
    res.status(204);
  }

}