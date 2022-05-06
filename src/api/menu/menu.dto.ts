import { IsString, IsObject, IsNumber, IsNotEmpty, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

/* 로그인 DTO */
export class InputDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  pw: string;
}

/* Auth Output DTO */
export class OutputDto {
  @IsNotEmpty()
  @IsNumber()
  readonly status: number;

  readonly data: object | boolean;
}