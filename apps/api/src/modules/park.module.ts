import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkController } from '../controllers/park.controller';
import { ParkService } from '../services/Park/Park.service';
import { Park, ParkSchema } from '../schemas/park.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Park', schema: ParkSchema }])],
  controllers: [ParkController],
  providers: [ParkService],
})
export class ParkModule {}