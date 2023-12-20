import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CaracteristicsDocument = HydratedDocument<SpaceType>;

@Schema()
export class SpaceType {
  @Prop()
  id: number;
}

export const AddressSchema = SchemaFactory.createForClass(SpaceType);
