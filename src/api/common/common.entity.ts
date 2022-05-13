import { Entity, PrimaryColumn, OneToMany, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'common', schema: 'public' })
export class Common {
  // 작성 버전
  @PrimaryGeneratedColumn()
  VER: number;

  // 작성자
  @Column({ type: 'varchar', length: 55, nullable: false, default: '' })
  AUTHOR: string;

  // 파비콘 src
  @Column({ type: 'varchar', nullable: false, default: '' })
  FAVICON: string;
  
  // 타이틀 
  @Column({ type: 'varchar', length: 55, nullable: false, default: '' })
  TITLE: string;

  // 전화번호
  @Column({ type: 'varchar', length: 14, nullable: false, default: '0000-0000-0000' })
  TEL: string;

  // 전화번호 이미지 src
  @Column({ type: 'varchar', nullable: false, default: '' })
  TEL_SRC: string;

  // 전화번호 이미지 노출 여부
  @Column({ type: 'boolean', nullable: false, default: false })
  TEL_ACTIVATE: boolean;

  // 홈 로고 src
  @Column({ type: 'varchar', nullable: false, default: '' })
  HOME_LOGO_SRC: string;

  // 홈 로고 노출 여부
  @Column({ type: 'boolean', nullable: false, default: true })
  HOME_LOGO_ACTIVATE: boolean;

  // 바로가기 로고 src
  @Column({ type: 'varchar', nullable: false, default: '' })
  SHORTCUT_SRC: string;

  // 바로가기 로고 노출 여부
  @Column({ type: 'boolean', nullable: false, default: false })
  SHORTCUT_ACTIVATE: boolean;

  // 바로가기 로고 경로
  @Column({ type: 'varchar', nullable: false, default: '/' })
  SHORTCUT_PATH: string;

  // 인덱스 페이지 이미지 || 동영상
  @Column({ type: 'varchar', length: 10, nullable: false, default: '이미지' })
  INDEX_TYPE: string;

  // 인덱스 페이지 src
  @Column({ type: 'varchar', nullable: false, default: '' })
  INDEX_SRC: string;

  // 푸터 이미지 src 
  @Column({ type: 'varchar', nullable: false, default: '' })
  FOOTER_SRC: string;

  // 푸터 배경색상
  @Column({ type: 'varchar', length: 7, nullable: false, default: '#FFFFFF' })
  FOOTER_BACKGROUND: string;

  // 푸터 폰트색상
  @Column({ type: 'varchar', length: 7, nullable: false, default: '#000000' })
  FOOTER_FONT: string;

  // 푸터 경계선 색상
  @Column({ type: 'varchar', length: 7, nullable: false, default: '#000000' })
  FOOTER_BORDER: string;

  // 푸터 경계선 크기
  @Column({ type: 'int', nullable: false, default: 1 })
  FOOTER_BORDER_PX: number;

  // 푸터 경계선 위치 (top)
  @Column({ type: 'boolean', nullable: false, default: true })
  FOOTER_BORDER_TOP: boolean;

  // 푸터 경계선 위치 (right)
  @Column({ type: 'boolean', nullable: false, default: true })
  FOOTER_BORDER_RIGHT: boolean;

  // 푸터 경계선 위치 (bottom)
  @Column({ type: 'boolean', nullable: false, default: true })
  FOOTER_BORDER_BOTTOM: boolean;

  // 푸터 경계선 위치 (left)
  @Column({ type: 'boolean', nullable: false, default: true })
  FOOTER_BORDER_LEFT: boolean;

  // 푸터 텍스트 (PC)
  @Column({ type: 'varchar', default: '' })
  FOOTER_TEXT_PC: string;

  // 푸터 텍스트 (모바일)
  @Column({ type: 'varchar', default: '' })
  FOOTER_TEXT_MOBILE: string;
}