import { IsString, IsObject, IsNumber, IsNotEmpty, ValidateNested, IsBoolean } from 'class-validator';
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

/* user create DTO */
export class CreateDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  pw: string;

  @IsString()
  name: string;
}

/* allow create DTO */
export class AllowDto {
  @IsNotEmpty()
  @IsString()
  IP: string;

  @IsNotEmpty()
  @IsString()
  DESC: string;
}