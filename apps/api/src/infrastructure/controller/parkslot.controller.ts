import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreateParkDTO } from '../../dto/CreatePark.dto';
import { CreateParkSlot } from '../../domain/services/CreateParkSlot.service';

@Controller()
export class ParkSlotController {
  constructor(private readonly createParkSlot: CreateParkSlot) {}

  @Post('/parks')
  createPark(@Body() body: CreateParkDTO) {
    this.createParkSlot.handle(body);
    return HttpStatus.NO_CONTENT;
  }
}
