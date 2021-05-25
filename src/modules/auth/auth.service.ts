import { Injectable } from '@nestjs/common';

import { UserService } from '../user/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
}
