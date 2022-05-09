import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Menu } from '../menu/menu.entity';

@Entity()
export class Page {
  @PrimaryColumn({ type: 'varchar', length: 55, unique: true, nullable: false })
  NAME: string;

  @Column({ type: 'boolean', nullable: false })
  ACTIVATE: boolean;

  @Column({ type: 'int', nullable: false })
  NO: number;

  @ManyToOne(type => Menu, menu => menu.PAGE, { onDelete: 'CASCADE' })
  menu: Menu;
}