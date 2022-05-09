import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

/* 메뉴 작성 DTO */
export class CreateDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly no: number;

  @IsNotEmpty()
  @IsString({ each: true })
  readonly page: string[];
}

/* 메뉴 삭제 DTO */
export class DeleteDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}