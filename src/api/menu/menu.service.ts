import * as dotenv from 'dotenv';

import { Injectable } from '@nestjs/common';

import { InputDto, OutputDto } from './menu.dto';
import { Menu } from './menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private MenuRepository: Repository<Menu>) {}


}