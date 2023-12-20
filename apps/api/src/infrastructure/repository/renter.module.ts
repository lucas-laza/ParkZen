// renter.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RenterService } from 'src/domain/services/Renter.service';
import { Renter } from 'src/domain/entities/Renter.entity'; // Assurez-vous du chemin correct

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Renter', schema: Renter }])],
  providers: [RenterService],
  exports: [RenterService],
})
export class RenterModule {}
