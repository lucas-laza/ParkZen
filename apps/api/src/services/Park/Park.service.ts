import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Park } from '../../schemas/park.model';
import { ParkSlot } from 'src/entities/Park.entity';

@Injectable()
export class ParkService {
  constructor(@InjectModel('Park') private readonly parkModel: Model<Park>) {}

  async create(createParkDto: any): Promise<Park> {
    const createdPark = new this.parkModel(createParkDto);
    return createdPark.save();
    // const slot = ParkSlot.createByUser(createParkDto);
    // await this.parkModel.create(slot);
    // return slot;
  }

  async findAll(): Promise<Park[]> {
    return this.parkModel.find().exec();
  }
}
