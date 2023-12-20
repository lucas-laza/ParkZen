import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParkDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}
