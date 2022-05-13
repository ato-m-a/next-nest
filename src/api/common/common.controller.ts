import { Controller, Post, Get, Delete, Req, Res, Body, Session, Inject } from '@nestjs/common';
import { Request, Response } from 'express';
import { getClientIp } from 'request-ip';

/* logger */
import { Logger as WinstonLogger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

/* Service */
import { CommonService } from './common.service';

/* DTO */
import { UpdateDto, CreateDto } from './common.dto';

@Controller()
export class CommonController {
  constructor (
    private CommonService: CommonService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger
  ) {}

  @Post('/update')
  public async updateCommon(@Req() req: Request, @Res() res: Response, @Session() session: Record<string, any>, @Body() UpdateDto: UpdateDto) {
    const dataset: CreateDto = {
      AUTHOR: session.auth.ID,
      FAVICON: UpdateDto.favicon,
      TITLE: UpdateDto.title,
      TEL: UpdateDto.tel.tel,
      TEL_SRC: UpdateDto.tel.src,
      TEL_ACTIVATE: UpdateDto.tel.activate,
      INDEX_TYPE: UpdateDto.index.type,
      INDEX_SRC: UpdateDto.index.src,
      FOOTER_SRC: UpdateDto.footer.src,
      FOOTER_BACKGROUND: UpdateDto.footer.background,
      FOOTER_BORDER: UpdateDto.footer.borderColor,
      FOOTER_PX: UpdateDto.footer.borderPx,
      FOOTER_BORDER_TOP: UpdateDto.footer.border.includes('top') ? true : false,
      FOOTER_BORDER_RIGHT: UpdateDto.footer.border.includes('right') ? true : false,
      FOOTER_BORDER_BOTTOM: UpdateDto.footer.border.includes('bottom') ? true : false,
      FOOTER_BORDER_LEFT: UpdateDto.footer.border.includes('left') ? true : false,
      FOOTER_TEXT_PC: UpdateDto.footer.text_PC,
      FOOTER_TEXT_MOBILE: UpdateDto.footer.text_Mobile,
      HOME_LOGO_SRC: UpdateDto.home.src,
      HOME_LOGO_ACTIVATE: UpdateDto.home.activate,
      SHORTCUT_SRC: UpdateDto.shortcut.src,
      SHORTCUT_PATH: UpdateDto.shortcut.path,
      SHORTCUT_ACTIVATE: UpdateDto.shortcut.activate
    };
    
    await this.CommonService.Update(dataset);

    res.status(201).json({ result: true });
  }
}