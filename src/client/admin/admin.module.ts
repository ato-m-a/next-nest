import { Module } from '@nestjs/common';

/* Controllers */
import { AdminController } from './admin.controller';

/* Modules */
import { CategoryModule } from './category/category.module'
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CategoryModule,
    CommonModule
  ],
  controllers: [AdminController],
  providers: [],
  exports: []
})
export class AdminModule {}
