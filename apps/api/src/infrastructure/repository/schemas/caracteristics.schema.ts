import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CaracteristicsDocument = HydratedDocument<Caracteristics>;

@Schema()
export class Caracteristics {
  @Prop()
  isIndoor: boolean;

  @Prop()
  isPublic: boolean;

}

export const CaracteristicsSchema = SchemaFactory.createForClass(Caracteristics);
