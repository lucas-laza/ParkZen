import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RenterDocument = HydratedDocument<Renter>;

@Schema()
export class Renter {
  @Prop()
  lastName: string;

  @Prop()
  firstName: string;
}

export const RenterSchema = SchemaFactory.createForClass(Renter);
