import {
  IsString,
  Min,
  Max,
  IsUrl,
  IsEmail,
  IsNotEmpty,
  IsOptional
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Min(2)
  @Max(30)
  @IsNotEmpty()
  @IsOptional()
  username: string;

  @IsString()
  @Min(2)
  @Max(200)
  @IsOptional()
  about?: string;

  @IsUrl()
  @IsOptional()
  avatar?: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
