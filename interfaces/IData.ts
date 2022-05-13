import { IMenu } from './ICategory';

/* all data */
export interface IData {
  menu: IMenu[];
  common: ICommon;
}

/* category data */
export interface ICategory {
  menu: IMenu[];
}

/* common data */
export interface ICommon {
  latest: { [key: string]: string; };
  ttl: object[];
}