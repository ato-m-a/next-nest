import { Module } from '@nestjs/common';

import { CategoryController } from './category.controller';

/* Modules */

@Module({
  imports: [],
  controllers: [CategoryController]
})
export class CategoryModule {}
