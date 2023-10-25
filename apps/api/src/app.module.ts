import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateParkSlot } from './services/ParkSlot/CreateParkSlot.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ParkModule } from './modules/park.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/coucou'), ParkModule],
  controllers: [AppController],
  providers: [CreateParkSlot],
})
export class AppModule {}
