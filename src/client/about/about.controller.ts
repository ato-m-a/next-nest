import { Controller, Get, Render } from '@nestjs/common';

@Controller('about')
export class AboutController {
  @Render('about')
  @Get()
  public about() {
    return {};
  }
}
