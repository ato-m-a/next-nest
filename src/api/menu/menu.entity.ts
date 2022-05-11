import { Entity, PrimaryColumn, OneToMany, Column } from 'typeorm';
import { Page } from '../page/page.entity';

@Entity({ name: 'menu', schema: 'public' })
export class Menu {
  @PrimaryColumn({ type: 'varchar', length: 55, unique: true, nullable: false })
  NAME: string;

  @Column({ type: 'int', nullable: false })
  NO: number;

  @OneToMany(type => Page, page => page.menu)
  PAGE: Page[];
}