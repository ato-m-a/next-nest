import * as dotenv from 'dotenv';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

/* table entities */
import { Menu } from './menu/menu.entity';
import { Page } from './page/page.entity'; 

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Menu) private MenuRepository: Repository<Menu>,
    @InjectRepository(Page) private PageRepository: Repository<Page>
  ) {}
  
  /* userData fetch */
  async query() {
    const response = await this.MenuRepository.createQueryBuilder('menu')
        .leftJoinAndSelect('menu.PAGE', 'page')
        .getMany();

    return { menu: response };
  }
}