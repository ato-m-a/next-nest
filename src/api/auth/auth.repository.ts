import { EntityRepository, Repository } from "typeorm";
import { Auth, Allow } from './auth.entity';

@EntityRepository(Auth)
export class AuthRepository extends Repository<Auth> {}

@EntityRepository(Allow)
export class AllowRepository extends Repository<Allow> {}