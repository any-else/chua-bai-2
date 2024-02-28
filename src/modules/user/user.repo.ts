import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { UserDto } from './dtos/dto-users';
import { writeFile, writeFileSync } from 'fs';

@Injectable()
export class UserRepo {
  constructor() {}
  async getAll() {
    const user = await readFile('src/data/users.json', 'utf-8');
    return JSON.parse(user);
  }

  async getById(id: number) {
    const user = await readFile('src/data/users.json', 'utf-8');
    const data = JSON.parse(user);
    return data.find((item) => item.id == id);
  }

   

  async create(body: UserDto) {
    const user = await readFile('src/data/users.json', 'utf-8');
    const data = JSON.parse(user);
    data.push(body);
    await writeFileSync('src/data/users.json', JSON.stringify(data));
    return { message: "Thêm thành công" , data };
  }
  async pagnigation(page,limit) {
    const user = await readFile('src/data/users.json', 'utf-8');
    const data = JSON.parse(user);
    const userPage = data.slice((page - 1) * limit, page * limit)
    return userPage
  }

  async sort(sort) {
    const user = await readFile('src/data/users.json', 'utf-8');
    const data = JSON.parse(user);
    if (sort === "asc") {
      return data.sort((a, b) => a.id - b.id);
    } else if (sort === "desc") {
      return data.sort((a,b)=> b.id - a.id);  
    }
  }
  update() {
    return 'update';
  }

  delete() {
    return 'delete';
  }
}
