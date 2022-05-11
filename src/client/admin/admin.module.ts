import { Module } from '@nestjs/common';

/* Controllers */
import { AdminController } from './admin.controller';

/* Modules */
import { CategoryModule } from './category/category.module'

@Module({
  imports: [
    CategoryModule
  ],
  controllers: [AdminController],
  providers: [],
  exports: []
})
export class AdminModule {}
