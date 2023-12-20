// park.controller.ts
import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { ParkService } from '../../domain/services/Park.service';
import { Park } from '../repository/schemas/park.model';

@Controller('parks')
export class ParkController {
  constructor(private readonly parkService: ParkService) {}

  @Post()
  async create(@Body() createParkDto: any, @Headers('authorization') authorization: string) {
    const token = authorization.split(' ')[1];  // Extraire le token du header Authorization
    return this.parkService.create(createParkDto, token);
  }

  @Get()
  async findAll(): Promise<Park[]> {
    return this.parkService.findAll();
  }
}
