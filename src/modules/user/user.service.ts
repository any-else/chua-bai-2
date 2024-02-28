import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepo } from './user.repo';
import { readFile } from 'fs';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepo) {}

  getAll() {
    /** handle logic  */
    const data = this.userRepo.getAll();
    if (!data) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  getById(id: number) {
    /** handle logic  */
    return this.userRepo.getById(id);
  }

  async searchByName(interest: string) {
    /** handle logic  */
    const data = await this.userRepo.getAll();
    const result = data.filter((item) =>
      item.interests.some((i) => i.includes(interest)),
    );
    return result;
  }

  create(body) {
    /** handle logic  */
    return this.userRepo.create(body);
  }

  pagnigation(page, limit) {
    return this.userRepo.pagnigation(page, limit);
  }

  sort(sort) {
    return this.userRepo.sort(sort);
  }
}
