import {
  IsString,
  Min,
  Max,
  IsUrl,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Min(2)
  @Max(30)
  @IsNotEmpty()
  username: string;

  @IsString()
  @Min(2)
  @Max(200)
  about?: string;

  @IsUrl()
  avatar?: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
