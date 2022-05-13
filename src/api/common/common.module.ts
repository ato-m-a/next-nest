import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/* Controller */
import { CommonController } from './common.controller';

/* Service */
import { CommonService } from './common.service';

/* Entity */
import { Common } from './common.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Common])
  ],
  controllers: [CommonController],
  providers: [CommonService],
  exports: [CommonService]
})
export class CommonModule {}
