import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('api')
export class ApiController {
  @Get()
  ApiIndex(@Res() res: Response) {
    res.status(200).json({ message: 'hello!' });
  }
}