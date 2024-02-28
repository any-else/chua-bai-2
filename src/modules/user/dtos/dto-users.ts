import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserDto {
  @IsNotEmpty()
  @IsString()
  id: number;
  @IsNotEmpty()
  @Length(10, 20)
  name: string;
  @IsNotEmpty()
  @Length(10, 20)
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  address: string;
  phone: string;
  website: string;
  company: string;
  interests: string[];
}