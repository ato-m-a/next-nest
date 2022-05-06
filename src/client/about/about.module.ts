import { Module } from '@nestjs/common';

import { AboutController } from './about.controller';

@Module({
  controllers: [AboutController],
  providers: [],
  exports: []
})
export class AboutModule {}
