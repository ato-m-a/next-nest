import { Controller, Session, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private ApiService: ApiService) {}

  @Get()
  ApiIndex(@Res() res: Response, @Session() session: Record<string, any>) {
    let user;
    let message;

    if (session && session.auth) {
      user = session.auth.ID;
      message = `you're session will expire at ${new Date(session.cookie._expires).toLocaleString('Ko-KR')}`
    } else {
      user = "guest";
      message = "you're not signed in yet!"
    }

    res.status(200).send(`Hello ${user}! ${message}`);
  }

  @Get('/query')
  async UserData(@Res() res: Response) {
    const response = await this.ApiService.query();

    res.status(200).json(response);
  }
}