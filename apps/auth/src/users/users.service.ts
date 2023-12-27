import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly configService: ConfigService,
  ) {
    const v = this.configService.get('MONGODB_URI');
    console.log(v);
  }
  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }
}
