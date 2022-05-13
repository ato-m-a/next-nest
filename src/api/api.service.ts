import * as dotenv from 'dotenv';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

/* table entities */
import { Menu } from './menu/menu.entity';
import { Page } from './page/page.entity'; 
import { Common } from './common/common.entity';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Menu) private MenuRepository: Repository<Menu>,
    @InjectRepository(Page) private PageRepository: Repository<Page>,
    @InjectRepository(Common) private CommonRepository: Repository<Common>
  ) {}
  
  /* Category fetch */
  async Category() {
    const response = await this.MenuRepository.createQueryBuilder('menu')
        .leftJoinAndSelect('menu.PAGE', 'page')
        .getMany();

    return { menu: response };
  }

  /* Common fetch */
  async Common() {
    const response = await this.CommonRepository.createQueryBuilder('common').orderBy('common.VER', 'DESC').getMany();
    const latest: Common | boolean = response[0] ? response[0] : false;

    return { latest, ttl: response };
  }
}