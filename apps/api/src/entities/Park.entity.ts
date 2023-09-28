import { CreateParkDTO } from "src/dto/CreatePark.dto";
import { Address } from "./Address.entity";
import { Caracteristics } from "./Caracteristics.entity";
import { Renter } from "./Renter.entity";
import { SpaceType } from "./SpaceType.entity";
import { randomUUID } from "crypto";

export class ParkSlot {
  id: string;
  address: Address;
  priceForOneHour: number;
  renter: Renter;
  rentStartAt: Date;
  rentEndAt: Date;
  spaceType: SpaceType;
  caracteristics: Caracteristics;
  createdAt: Date;

  private constructor(data: CreateParkDTO ) {
    const id = randomUUID();
    const createdAt = new Date();
    
    this.id = id;
    this.address = new Address(data.address);
    this.priceForOneHour = data.priceForOneHour;
    this.renter = new Renter(data.renter);
    this.rentStartAt = data.rentStartAt;
    this.rentEndAt = data.rentEndAt;
    this.spaceType = new SpaceType(data.spaceType);
    this.caracteristics = new Caracteristics(data.caracteristics);
    this.createdAt = createdAt;
  }
  static createByUser(data: CreateParkDTO) {
    return new ParkSlot(data);
  }
}
