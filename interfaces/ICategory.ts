export interface IMenu {
  NAME: string;
  NO: number;
}

export interface IPage {
  NAME: string;
  ACTIVATE: boolean;
  NO: number;
}

export interface ICategory {
  menu: object[];
  page: object[];
}