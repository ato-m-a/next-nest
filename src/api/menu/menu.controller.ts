import { Controller, Post, Get, Delete, Req, Res, Body, Session } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';

/* Service */
import { MenuService } from './menu.service';

/* DTO */
import { CreateDto, DeleteDto } from './menu.dto';

@Controller()
export class MenuController {
  constructor (private MenuService: MenuService) {} 

  /* 메뉴 fetch */
  @Get()
  public async fetchMenu(@Res() res: Response) {
    const response = await this.MenuService.fetchMenu();

    res.status(200).json(response);
  }

  /* 메뉴 생성 */
  @Post('/create')
  public async createMenu(@Req() req: Request, @Res() res: Response, @Body() CreateDto: CreateDto, @Session() session: Record<string, any>) {
    const response = await this.MenuService.createMenu(CreateDto);

    res.status(201).json(response);
  }

  /* 메뉴 삭제 */
  @Delete('/delete')
  public async deleteMenu(@Req() req: Request, @Res() res: Response, @Body() DeleteDto: DeleteDto, @Session() session: Record<string, any>) {
    const response = await this.MenuService.deleteMenu(DeleteDto);

    res.status(204).json(response);
  }

  /* 메뉴 수정 */
  @Post('/update')
  public async updateMenu(@Req() req: Request, @Res() res: Response, @Body() UpdateDto: CreateDto, @Session() session: Record<string, any>) {
    const response = await this.MenuService.updateMenu(UpdateDto);

    res.status(201).json(response);
  }
}