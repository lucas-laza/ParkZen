// user.model.ts

export type Address = {
  street: string;
  city: string;
  zipCode: string;
}

export type Renter = {
  id: number;
  firstName: string;
  lastName: string;
}

export type SpaceType = {
  id: number;
  name: string;
}

export type Caracteristics = {
  isPublic: boolean;
  isIndoor: boolean;
}

export type CreateParkDTO = {
  address: Address;
  priceForOneHour: number;
  renter: Renter;
  rentStartAt: Date;
  rentEndAt: Date;
  spaceType: SpaceType;
  caracteristics: Caracteristics;
}