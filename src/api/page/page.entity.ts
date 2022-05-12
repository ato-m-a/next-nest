import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Menu } from '../menu/menu.entity';

@Entity({ name: 'page', schema: 'public' })
export class Page {
  @PrimaryColumn({ type: 'varchar', length: 55, unique: true, nullable: false })
  NAME: string;

  @Column({ type: 'boolean', nullable: false })
  ACTIVATE: boolean;

  @Column({ type: 'int', nullable: false })
  NO: number;

  @Column({ type: 'varchar', length: 55, unique: true, nullable: false })
  PATH: string;

  @ManyToOne(type => Menu, menu => menu.PAGE, { onDelete: 'CASCADE' })
  menu: Menu;
}