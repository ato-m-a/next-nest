export interface IAuth {
  ID: string;
  ROLE: string;
  NAME?: string;
  ALLOW: boolean;
  REGDATE: string;
  IP: string[];
}