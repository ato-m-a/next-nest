import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Auth {
  @Generated()
  SEQ: number;

  @PrimaryColumn({ type: 'varchar', length: 55, unique: true, nullable: false })
  ID: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  PW: string;

  @Column({ type: 'varchar', length: 55, nullable: false })
  ROLE: string;

  @Column({ type: 'varchar', length: 55, nullable: true })
  NAME: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  ALLOW: boolean;

  @CreateDateColumn()
  REGDATE: Date;

  @OneToMany(type => Allow, allow => allow.auth)
  IP: Allow[];
}

/* 허용 IP entity */
@Entity()
export class Allow {
  @PrimaryColumn({ type: 'varchar', length: 36, nullable: false })
  IP: string;

  @ManyToOne(type => Auth, auth => auth.IP, { onDelete: 'CASCADE' })
  auth: Auth;

  @Column({ type: 'varchar', length: 255, nullable: false, default: '' })
  DESC: string;
}