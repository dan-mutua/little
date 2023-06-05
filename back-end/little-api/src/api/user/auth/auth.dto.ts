import { Trim } from 'class-sanitizer';
import { IsOptional, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Trim()
  public readonly username: string;

  @IsString()
  public readonly password: string;

  @IsString()
  @IsOptional()
  public readonly name?: string;
}

export class LoginDto {
  @IsString()
  @Trim()
  public readonly username: string;

  @IsString()
  public readonly password: string;
}
