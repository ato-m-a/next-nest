import * as dotenv from 'dotenv';

import { Injectable } from '@nestjs/common';

import { CreateDto, DeleteDto } from './page.dto';
import { Page } from './page.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


@Injectable()
export class PageService {
  constructor(@InjectRepository(Page) private PageRepository: Repository<Page>) {}

  /* 페이지 생성 */
  async createPage(CreateDto: CreateDto) {

  }

  /* 페이지 삭제 */
  async deletePage(DeleteDto: DeleteDto) {

  }

  /* 페이지 수정 */
  async updatePage(UpdateDto: CreateDto) {
    
  }
}