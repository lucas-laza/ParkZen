// park.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { ParkService } from '../services/Park/Park.service'; // Importez le service ParkService
import { Park } from '../schemas/park.model'; // Importez le modèle Park

@Controller('parktest')
export class ParkController {
  constructor(private readonly parkService: ParkService) {}

  @Post()
  async create(@Body() createParkDto: any): Promise<Park> {
    return this.parkService.create(createParkDto);
  }

  @Get()
  async findAll(): Promise<Park[]> {
    return this.parkService.findAll();
  }
}
