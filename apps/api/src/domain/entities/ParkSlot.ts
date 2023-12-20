import { CreateParkDTO } from 'src/dto/CreatePark.dto';
import { v4 as uuid } from 'uuid';

export class ParkSlot {
  private id: string;
  private firstName: string;
  private createdAt: Date;

  private constructor(payload: CreateParkDTO) {
    this.id = uuid();
    this.firstName = payload.firstName;
    this.createdAt = new Date();
  }

  public static createByUser(payload: CreateParkDTO) {
    return new ParkSlot(payload);
  }
}
