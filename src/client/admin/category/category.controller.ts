import { Controller, Post, Get, Delete, Req, Res, Body, Session, Render, Next } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';


@Controller()
export class CategoryController {
  @Render('admin/category')
  @Get()
  public Category() {
    return {};
  }
}