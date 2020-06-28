import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';


@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('users/login')
  async login(@Request() req) {
    return req.user;
  }
}
