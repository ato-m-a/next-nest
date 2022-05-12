export interface IMenu {
  NAME: string;
  PATH: string;
  PAGE: IPage[];
}

export interface IPage {
  NAME: string;
  ACTIVATE: boolean;
  TYPE: string;
  PATH: string;
}