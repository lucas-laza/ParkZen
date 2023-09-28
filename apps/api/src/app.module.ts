import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateParkSlot } from './services/ParkSlot/CreateParkSlot.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CreateParkSlot]
})
export class AppModule {}
