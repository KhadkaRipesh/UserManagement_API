import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userRepoService: UsersService) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userRepoService.create(createUserDto);
  }

  @Get()
  getUsers() {
    return this.userRepoService.getUser();
  }
  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.userRepoService.getOne(+id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userRepoService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userRepoService.deleteUser(+id);
  }
}
