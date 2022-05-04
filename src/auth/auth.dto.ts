import { IsString, IsObject, IsNumber, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

/* 로그인 DTO */
export class SignInDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  pw: string;
}

/* Auth Output DTO */
export class SessionDto {
  @IsNotEmpty()
  @IsNumber()
  readonly status: number;

  readonly data: object | boolean;
}