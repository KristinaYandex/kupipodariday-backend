import { PartialType } from '@nestjs/swagger';
import { CreateWishlistDto } from './create-wishlist.dto';
import { IsString, IsUrl, IsArray, Length, MaxLength, IsOptional, MinLength } from 'class-validator';

export class UpdateWishlistDto extends PartialType(CreateWishlistDto) {}
