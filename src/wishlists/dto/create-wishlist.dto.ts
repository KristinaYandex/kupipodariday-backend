import { IsString, Min, Max, IsUrl, IsArray } from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @Min(1)
  @Max(250)
  name: string;

  @IsUrl()
  image: string;

  @IsArray()
  itemsId: number[];

  @IsString()
  @Max(1500)
  description: string;
}
