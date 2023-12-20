import { Body, Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { CreateParkDTO } from './dto/CreatePark.dto';
import { response } from 'express';
import { CreateParkSlot } from './services/ParkSlot/CreateParkSlot.service';

@Controller()
export class AppController {
  constructor(public parkSlotService: CreateParkSlot) {}

  @Get()
  getHello(): string {
    return 'Coucou UwU';
  }

  @Post('parks')
  async createPark(@Body() payload: CreateParkDTO) {
    const slot = this.parkSlotService.handle(payload);
    console.log('SLOT', slot);

    return response.status(HttpStatus.NO_CONTENT);
  }
}
