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

/* user create DTO (to controller) */
export class SignUpDto {
  @IsNotEmpty()
  @IsString() 
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly pw: string;

  @IsString()
  readonly name?: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;
}

/* user create DTO (to service) */
export class CreateDto {
  @IsNotEmpty()
  @IsString()
  ID: string;

  @IsNotEmpty()
  @IsString()
  PW: string;

  @IsNotEmpty()
  @IsString()
  ROLE: string;

  @IsString()
  NAME: string;

  @IsBoolean()
  ALLOW: boolean;
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