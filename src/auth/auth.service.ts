import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  auth(user: User) {
    //Генерируем токен
    const payload = { sub: user.id };

    return { access_token: this.jwtService.sign(payload) };
  }

  //Метод validatePassword проверяет, совпадает ли пароль пользователя с тем, что есть в базе.
  async validatePassword(username: string, password: string) {
    const user = await this.usersService.findByUserName(username);
    if (!user) {
      throw new UnauthorizedException('Неверное имя пользоваетеля или пароль');
    }

    /* В идеальном случае пароль обязательно должен быть захэширован */
    const passwordHash = await bcrypt.compare(password, user.password);
    if (!passwordHash) {
      throw new UnauthorizedException('Неверное имя пользоваетеля или пароль');
    }
    return user;
  }
}
