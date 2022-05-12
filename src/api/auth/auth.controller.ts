import { Controller, Post, Get, Delete, Req, Res, Body, Session, Inject } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';

/* logger */
import { Logger as WinstonLogger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

/* Service */
import { AuthService } from './auth.service';

/* DTO */
import { SignInDto, SignUpDto, AllowDto } from './auth.dto';

@Controller()
export class AuthController {
  constructor (
    private AuthService: AuthService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger
  ) {}

  /* 내 정보 fetch */
  @Get()
  public async fetchMyInfo(@Res() res: Response, @Session() session: Record<string, any>) {
    const response = await this.AuthService.Fetch(session);
    
    res.status(200).json(response);
  }
  
  /* 로그인 */
  @Post('/signin')
  public async SignIn(@Req() req: Request, @Res() res: Response, @Session() session: Record<string, any>, @Body() SignInDto: SignInDto) {
    const response = await this.AuthService.SignIn(getClientIp(req), SignInDto);

    if (response.status === 201) {
      session.auth = response.data;
      session.save(() => { 
        this.logger.info(
          `[USER(${session.auth.ROLE})]${session.auth.ID}: signed in successfully. (${getClientIp(req)})`, 
          { ID: session.auth.ID, IP: getClientIp(req) });
      });
    }
    res.status(response.status).json(response.data);
  }

  /* 로그아웃 */
  @Delete('/signout')
  public async SignOut(@Req() req: Request, @Res() res: Response, @Session() session: Record<string, any>) {
    const auth = session.auth;
    delete session.auth;
    await session.save(() => {
      this.logger.info(`[USER(${auth.ROLE})]${auth.ID}: signed out successfully. (${getClientIp(req)})`);
      res.status(204).send();
    });
  }

  /* 관리자 계정 생성 */
  @Post('/signup')
  public async SignUp(@Req() req: Request, @Res() res: Response, @Session() session: Record<string, any>, @Body() dataset: SignUpDto) {
    await this.AuthService.SignUp({ ID: dataset.id, PW: dataset.pw, ROLE: dataset.role, NAME: dataset.name, ALLOW: false });

    res.status(201).json({ result: true });
  }

  /* 허용 IP 생성 */
  @Post('/allow/create')
  public async createAllow(@Res() res: Response, @Body() dataset: AllowDto, @Session() session: Record<string, any>) {
    await this.AuthService.createAllow({ IP: dataset.IP, DESC: dataset.DESC, auth: session.auth.ID });

    res.status(201).json({ result: true });
  }

  /* 허용 IP 삭제 */
  @Delete('/allow/delete')
  public async deleteAllow(@Res() res: Response, @Body() ip: string, @Session() session: Record<string, any>) {
    await this.AuthService.deleteAllow(ip, session.auth.ID);

    res.status(200).json({ result: true });
  }

}