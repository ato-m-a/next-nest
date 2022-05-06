import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/* Controller */
import { MenuController } from './menu.controller';

/* Service */
import { MenuService } from './menu.service';

/* Entity */
import { Menu } from './menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])],
  controllers: [MenuController],
  providers: [MenuService],
  exports: [MenuService]
})
export class MenuModule {}
