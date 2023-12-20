import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address } from './address.schema';

@Schema()
export class Park extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ type: Address, required: true })
  address: Address;

  @Prop({ required: true })
  priceForOneHour: number;
}

export const ParkSchema = SchemaFactory.createForClass(Park);
