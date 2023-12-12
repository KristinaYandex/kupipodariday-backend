import { IsString, Min, Max, IsUrl, IsNumber } from 'class-validator';

export class CreateWishDto {
  @IsString()
  @Min(1)
  @Max(250)
  name: string;

  @IsUrl()
  link: string;

  @IsUrl()
  image: string;

  @IsNumber()
  @Min(1)
  price: number;

  @IsString()
  @Min(1)
  @Max(1024)
  description: string;

  @IsNumber()
  raised?: number;
}
