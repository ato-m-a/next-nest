import { Controller, Post, Get, Delete, Req, Res, Body, Session, Render } from '@nestjs/common';
import { Request, Response } from 'express';

/* Service */

/* DTO */

@Controller('admin')
export class AdminController {
  @Render('admin')
  @Get()
  public loginPage() {
    return { result: 'dd' };
  }
}