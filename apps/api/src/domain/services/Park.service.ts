// park.service.ts
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Park } from '../../infrastructure/repository/schemas/park.model';
import { CreateParkDTO } from 'src/dto/CreatePark.dto';
import { HttpStatus } from '@nestjs/common';
import { response } from 'express';
import { randomUUID } from 'crypto';

@Injectable()
export class ParkService {
  constructor(
    @InjectModel('Park') private readonly parkModel: Model<Park>,
    private readonly jwtService: JwtService,
  ) {}

  // async create(payload: CreateParkDTO, token: string) {
  async create(payload: CreateParkDTO) {
    const date = payload.rentStartAt;
    const currentDate = new Date();
    console.log(currentDate);

    currentDate.setHours(0, 0, 0, 0);
    if (date < currentDate) {
      return response.status(HttpStatus.BAD_REQUEST);
    }

    payload['id'] = randomUUID();

    // const tokenData = null;
    // const tokenData = this.decodeToken(token);

    // console.log(tokenData);
    // if (tokenData) {
    //   payload['user'] = tokenData;
    // } else {
    //   // return response.status(HttpStatus.BAD_REQUEST);
    // }
    const createdPark = new this.parkModel(payload);
    return createdPark.save();
  }

  async findAll(): Promise<Park[]> {
    return this.parkModel.find().exec();
  }

  async delete(id: string): Promise<any> {
    const result = await this.parkModel.deleteOne({ id: id }).exec();
    if (result.deletedCount === 0) {
      throw new Error(`Park with ID ${id} not found.`);
    }
    return result;
  }

  decodeToken(token: string): any {
    try {
      const decodedToken = this.jwtService.verify(token.replace('Bearer ', '')); // Supprimez le préfixe "Bearer "
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error.message);
      throw new Error('Unable to decode token');
    }
  }
}
