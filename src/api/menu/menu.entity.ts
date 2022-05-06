import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryColumn({ type: 'varchar', length: 55, unique: true, nullable: false })
  NAME: string;

  @Column({ type: 'boolean', nullable: false })
  ACTIVATE: boolean;
}