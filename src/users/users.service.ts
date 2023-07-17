import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const user = this.userRepo.create(dto);
    return await this.userRepo.save(user);
  }

  getUser() {
    return this.userRepo.find();
  }

  getOne(id: number) {
    // return this.userRepo.find({ where: { id: id } });
    return this.userRepo.findOneBy({ id: id });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOneBy({ id: id });
    Object.assign(user, updateUserDto);
    return await this.userRepo.save(user);
  }

  async deleteUser(id: number) {
    const user = await this.userRepo.findOneBy({ id: id });
    return await this.userRepo.remove(user);
  }
}
