import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/* Controller */
import { AuthController } from './auth.controller';

/* Service */
import { AuthService } from './auth.service';

/* Entity */
import { Auth, Allow } from './auth.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auth, Allow])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
