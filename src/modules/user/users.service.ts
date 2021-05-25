import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { IUsers } from './users.interface';

import { generatePasswordHash, comparePasswordHash } from '../../utils/utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getUserByEmail(params: IUsers): Promise<any> {
    // try {
    //   return await this.usersRepository.findOneOrFail({
    //     email: params.email,
    //   });
    // } catch (error) {
    //   return error;
    // }
  }

}
