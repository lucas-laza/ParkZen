// park-slot.entity.ts
import { CreateParkDTO } from 'src/dto/CreatePark.dto';
import { Address } from './Address.entity';
import { Caracteristics } from './Caracteristics.entity';
import { Renter } from './Renter.entity';
import { SpaceType } from './SpaceType.entity';
import { randomUUID } from 'crypto';
import { RenterService } from '../services/Renter.service';

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
  private renterService: RenterService;

  private constructor(data: CreateParkDTO, renterService: RenterService) {
    const id = randomUUID();
    const createdAt = new Date();

    this.id = id;
    this.address = new Address(data.address);
    this.priceForOneHour = data.priceForOneHour;
    // this.renter = new Renter(data.renter);
    this.renter = data.renter;
    this.rentStartAt = data.rentStartAt;
    this.rentEndAt = data.rentEndAt;
    this.spaceType = new SpaceType(data.spaceType);
    this.caracteristics = new Caracteristics(data.caracteristics);
    this.createdAt = createdAt;
    this.renterService = renterService;
    console.log(data);

    // if (data.user_id) {
    //   this.fetchRenter(data.user_id).then((renter) => {
    //     this.renter = renter;
    //     console.log(renter);
    //   });
    // }
  }

  async fetchRenter(userId: number): Promise<Renter> {
    const renter = await this.renterService.findOne(userId);
    return new Renter(renter);
  }

  static createByUser(data: CreateParkDTO, renterService: RenterService) {
    return new ParkSlot(data, renterService);
  }
}
