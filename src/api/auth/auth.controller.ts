import { Controller, Post, Get, Delete, Req, Res, Body, Session, Inject } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';

/* logger */
import { Logger as WinstonLogger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

/* Service */
import { AuthService } from './auth.service';

/* DTO */
import { SignInDto, AllowDto } from './auth.dto';

@Controller()
export class AuthController {
  constructor (
    private AuthService: AuthService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger
  ) {}

  /* 내 정보 fetch */
  @Get('/myinfo')
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
      session.save();
    } 

    this.logger.info('signed in successfully.', { ID: session.auth.ID, IP: getClientIp(req) });
    res.status(response.status).json(response.data);
  }

  /* 로그아웃 */
  @Delete('/signout')
  public async SignOut(@Res() res: Response, @Session() session: Record<string, any>) {
    delete session.auth;
    await session.save(() => {
      res.status(204).send();
    });
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