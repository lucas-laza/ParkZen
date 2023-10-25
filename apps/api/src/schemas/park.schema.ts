import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Address } from './address.schema';

export type ParkDocument = HydratedDocument<Park>;

@Schema()
export class Park {
  // @Prop()
  // _id: string;
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Address' } )
  address: Address;
  @Prop({ required: true })
  priceForOneHour: number;
  // @Prop({ required: true })
  // renter: object;
  // @Prop({ required: true })
  // rentStartAt: Date;
  // @Prop()
  // rentEndAt: Date;
  // @Prop({ required: true })
  // spaceType: object;
  // @Prop({ required: true })
  // caracteristics: object;
  // @Prop()
  // createdAt: Date;
}

export const ParkSchema = SchemaFactory.createForClass(Park);