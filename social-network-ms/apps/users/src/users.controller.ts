import { Controller, Get, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
// import { JwtAuthGuard } from '@app/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @UseGuards(JwtAuthGuard)
  @Get(':userId/profile')
  async getProfileByUserId(@Param('userId') userId: string) {
    const profile = await this.usersService.findProfileByUserId(userId);
    if (!profile) {
      throw new NotFoundException(`Profile for userId ${userId} not found`);
    }
    return profile;
  }
}
