import { Module } from '@nestjs/common';

import { CommonController } from './common.controller';

/* Modules */

@Module({
  imports: [],
  controllers: [CommonController]
})
export class CommonModule {}
