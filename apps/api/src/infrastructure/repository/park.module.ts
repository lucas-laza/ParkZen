import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkController } from '../controller/Park.controller';
import { ParkService } from '../../domain/services/Park.service';
import { ParkSchema } from './schemas/park.model';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Park', schema: ParkSchema }]),
    JwtModule.register({
      secret: '!park59zen800coucou*', // Change this to a secure secret key
      signOptions: { expiresIn: '1h' }, // Set the expiration time for the token
    })
  ],
  controllers: [ParkController],
  providers: [ParkService],
})
export class ParkModule {}
