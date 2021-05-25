import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUsers(@Param() params) {
    return {
      success: true,
      data: {
        user: {
          id: 1,
          name: 'Nino',
          birthday: '01-16-1997',
          createdAt: '',
          updatedAt: ''
        }
      }
    }
  }

}
