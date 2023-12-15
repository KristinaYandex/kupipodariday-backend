import { IsString, IsUrl, IsArray, Length, MaxLength, IsOptional, MinLength } from 'class-validator';
export class CreateWishlistDto {
  @Length(1, 250)
  name: string;

  @IsUrl()
  image: string;

  @IsArray()
  itemsId?: number[];

  @Length(2, 1500)
  description?: string;
}
