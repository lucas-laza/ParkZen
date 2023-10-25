import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { response } from 'express';
import { CreateParkDTO } from 'src/dto/CreatePark.dto';
import { ParkSlot } from 'src/entities/Park.entity';

export class CreateParkSlot {
  constructor() {}
  public handle(payload: CreateParkDTO) {
    const date = payload.rentStartAt;
    const currentDate = new Date();
    console.log(currentDate);
    
    currentDate.setHours(0, 0, 0, 0);
    if (date < currentDate) {
      return response.status(HttpStatus.BAD_REQUEST);
    }
    return ParkSlot.createByUser(payload);
  }
}
