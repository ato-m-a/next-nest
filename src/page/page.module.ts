import { Module } from '@nestjs/common';

/* controller */
import { AboutController } from './about/about.controller';

@Module({
  imports: [
    AboutController
  ],
  controllers: []
})
export class PageModule {}
