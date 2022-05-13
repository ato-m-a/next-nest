import { Controller, Post, Get, Delete, Req, Res, Body, Session, Render, Next } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';
import axios from 'axios';


@Controller()
export class CommonController {
  @Render('admin/common')
  @Get()
  public async Common() {
    return {};
  }
}