// renter.service.ts
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Renter } from '../entities/Renter.entity';

@Injectable()
export class RenterService {
  constructor(
    @InjectModel(Renter.name) private readonly renterModel: Model<Renter>,
  ) {}

  async findAll(): Promise<Renter[]> {
    return this.renterModel.find().exec();
  }

  async findOne(id: number): Promise<Renter> {
    return this.renterModel.findById(id).exec();
  }
}
