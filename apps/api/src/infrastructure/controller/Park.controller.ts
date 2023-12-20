// park.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
// import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { ParkService } from '../../domain/services/Park.service';
import { Park } from '../repository/schemas/park.model';
import { DeleteParkDTO } from 'src/dto/DeletePark.dto';

@Controller('parks')
export class ParkController {
  constructor(private readonly parkService: ParkService) {}

  @Post()
  async create(
    @Body() createParkDto: any,
    // @Headers('authorization') authorization: string,
  ) {
    // const token = authorization.split(' ')[1];  // Extraire le token du header Authorization
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    // return this.parkService.create(createParkDto, token);
    return this.parkService.create(createParkDto);
  }

  @Get()
  async findAll(): Promise<Park[]> {
    return this.parkService.findAll();
  }

  @Delete()
  async delete(@Body() deleteParkDto: DeleteParkDTO): Promise<any> {
    try {
      if (!deleteParkDto.id) {
        throw new HttpException('ID is required', HttpStatus.BAD_REQUEST);
      }
      return await this.parkService.delete(deleteParkDto.id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
