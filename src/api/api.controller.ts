import { Controller, Session, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class ApiController {
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
}