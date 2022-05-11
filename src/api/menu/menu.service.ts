import * as dotenv from 'dotenv';

import { Injectable } from '@nestjs/common';

import { CreateDto, DeleteDto } from './menu.dto';
import { Menu } from './menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private MenuRepository: Repository<Menu>) {}

  /* 메뉴 query */
  async queryMenu() {
    const response = await this.MenuRepository.createQueryBuilder('menu')
        .getMany();
    return response;
  }

  /* 메뉴 생성 */
  async createMenu(CreateDto: CreateDto) {

  }

  /* 메뉴 삭제 */
  async deleteMenu(DeleteDto: DeleteDto) {

  }

  /* 메뉴 수정 */
  async updateMenu(UpdateDto: CreateDto) {

  }
}