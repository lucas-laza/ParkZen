import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Address } from './address.schema';
import { Renter } from './renter.schema';
import { Caracteristics } from './caracteristics.schema';
import { SpaceType } from './spaceType.schema';
export type ParkDocument = HydratedDocument<Park>;

@Schema()
export class Park {
  @Prop()
  id: string;
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  })
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Renter',
  })
  address: Address;
  @Prop({ required: true })
  priceForOneHour: number;
  renter: Renter;
  caracteristics: Caracteristics;
  spaceType: SpaceType;
  name: string;
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
