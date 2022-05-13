import * as dotenv from 'dotenv';

import { Injectable } from '@nestjs/common';

import { CreateDto } from './common.dto';
import { Common } from './common.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


@Injectable()
export class CommonService {
  constructor(@InjectRepository(Common) private CommonRepository: Repository<Common>) {}

  async Update(dataset: CreateDto): Promise<void> {
    await this.CommonRepository.createQueryBuilder()
      .insert()
      .into(Common)
      .values(dataset)
      .execute();
  }
}