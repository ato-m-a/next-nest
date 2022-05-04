import { Module } from '@nestjs/common';

/* controller */
import { AboutController } from './about/about.controller';

@Module({
  imports: [],
  controllers: [AboutController]
})
export class PageModule {}
