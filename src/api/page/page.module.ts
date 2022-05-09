import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/* Controller */
import { PageController } from './page.controller';

/* Service */
import { PageService } from './page.service';

/* Entity */
import { Page } from './page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Page])],
  controllers: [PageController],
  providers: [PageService],
  exports: [PageService]
})
export class PageModule {}
