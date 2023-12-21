import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OfferssModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { typeOrmConfig } from './config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    OfferssModule,
    UsersModule,
    WishesModule,
    WishlistsModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
