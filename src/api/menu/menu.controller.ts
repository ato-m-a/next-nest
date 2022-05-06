import { Controller, Post, Get, Delete, Req, Res, Body, Session } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';

/* Service */
import { MenuService } from './menu.service';

/* DTO */
import { InputDto } from './menu.dto';

@Controller()
export class MenuController {
  constructor (private MenuService: MenuService) {} 


}