import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Wish } from '../../wishes/entities/wish.entity';
import { IsString, IsUrl, Length, IsOptional, MaxLength, MinLength } from 'class-validator';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'varchar' })
  @IsString()
  @Length(1, 250)
  name: string;

  /*@Column({ default: '' })
  @IsOptional()
  @Length(0, 1500)
  description: string;*/

  @Column({ default: '', nullable: true })
  @Length(2, 1500)
  description: string;

  @Column()
  @IsUrl()
  image: string;

  @ManyToMany(() => Wish)
  @JoinTable()
  items: Wish[];

  //Ошибка в ТЗ, нет этого свойства
  @ManyToOne(() => User, (user) => user.wishlists)
  owner: User;
}