import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address } from './address.schema';
import { Renter } from './renter.schema';
import { Caracteristics } from './caracteristics.schema';
import { SpaceType } from './spaceType.schema';
@Schema()
export class Park extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ type: Address, required: true })
  address: Address;

  @Prop({ required: true })
  priceForOneHour: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  renter: Renter;

  @Prop({ required: true })
  caracteristics: Caracteristics;

  @Prop({ required: true })
  spaceType: SpaceType;
}

export const ParkSchema = SchemaFactory.createForClass(Park);
