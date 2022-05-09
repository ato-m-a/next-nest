import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

/* 페이지 작성 DTO */
export class CreateDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly menu: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly activate: boolean;

  @IsNotEmpty()
  @IsString()
  readonly pagetype: string;

  @IsNotEmpty()
  @IsNumber()
  readonly no: number;

  @IsNotEmpty()
  @IsString()
  readonly content: string;
}

/* 페이지 삭제 DTO */
export class DeleteDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}