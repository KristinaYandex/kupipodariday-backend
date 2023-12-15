import {
  IsString,
  IsUrl,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 30)
  @IsNotEmpty()
  @IsOptional()
  username: string;

  /*@Length(2, 200)
  @IsOptional()
  about?: string;*/

  @IsString()
  @IsOptional()
  @Length(1, 200)
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
