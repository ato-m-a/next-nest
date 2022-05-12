import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Page } from './page.entity';

@Injectable()
@EntityRepository(Page)
export class PageRepository extends Repository<Page> {}