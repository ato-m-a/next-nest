import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Menu } from './menu.entity';

@Injectable()
@EntityRepository(Menu)
export class MenuRepository extends Repository<Menu> {}