import { Controller, Post, Get, Delete, Req, Res, Body, Session } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';

/* Service */
import { PageService } from './page.service';

/* DTO */
import { CreateDto, DeleteDto } from './page.dto';

@Controller()
export class PageController {
  constructor (private PageService: PageService) {} 

  /* 페이지 Getter */
  @Get('/query')
  public async queryPage(@Res() res: Response) {
    const response = await this.PageService.queryPage();

    res.status(200).json(response);
  }

  /* 페이지 생성 */
  @Post('/create')
  public async createPage(@Req() req: Request, @Res() res: Response, @Body() CreateDto: CreateDto, @Session() session: Record<string, any>) {
    const response = await this.PageService.createPage(CreateDto);

    res.status(201).json(response);
  }

  /* 페이지 삭제 */
  @Delete('/delete')
  public async deletePage(@Req() req: Request, @Res() res: Response, @Body() DeleteDto: DeleteDto, @Session() session: Record<string, any>) {
    const response = await this.PageService.deletePage(DeleteDto);

    res.status(204).json(response);
  }

  /* 페이지 수정 */
  @Post('/update')
  public async updatePage(@Req() req: Request, @Res() res: Response, @Body() UpdateDto: CreateDto, @Session() session: Record<string, any>) {
    const response = await this.PageService.updatePage(UpdateDto);

    res.status(201).json(response);
  }
}