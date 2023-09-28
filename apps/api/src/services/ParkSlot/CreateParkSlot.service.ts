import { CreateParkDTO } from "src/dto/CreatePark.dto";
import { ParkSlot } from "src/entities/Park.entity";

export class CreateParkSlot {
  constructor () {

  }
  public handle(payload : CreateParkDTO) {
    return ParkSlot.createByUser(payload)
  }
}