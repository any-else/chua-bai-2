import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dtos/dto-users';

@Controller('api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  /** get All */
  @Get('list')
  @HttpCode(200)
  getAll() {
    return this.userService.getAll();
  }
  /** get By Id */
  @Get('list/:id')
  getById(@Param('id') id: number) {
    return this.userService.getById(id);
  }
  /** search */
  @Get('search')
  search(@Query('interests') interest: string) {
    return this.userService.searchByName(interest);
  }
  /** create */
  @Post('create')
  create(@Body() body: UserDto) {
    return this.userService.create(body);
  }

  /* pagnigation] */
  @Get('page')
  pagnigation(@Query('page') page: number, @Query('limit') limit: number) {
    console.log(page, limit);
    return this.userService.pagnigation(page, limit);
  }

  /* sort */
  @Get("sort")
  sort(@Query("sort") sort: string) {
    return this.userService.sort(sort);
  }

  /** update */

  /** delete */
}
