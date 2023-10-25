import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';

export class Address {
  @IsNotEmpty()
  street: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  @IsNumber()
  zipCode: string;
}

export class Renter {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
}

export class SpaceType {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
}

export class Caracteristics {
  @IsNotEmpty()
  @IsBoolean()
  isPublic: boolean;
  @IsNotEmpty()
  @IsBoolean()
  isIndoor: boolean;
}

export class CreateParkDTO {
  @IsNotEmpty()
  address: Address;

  @IsNotEmpty()
  @IsNumber()
  priceForOneHour: number;

  @IsNotEmpty()
  @ValidateNested()
  // @Type(() => Renter)
  renter: Renter;

  @IsOptional()
  @IsDate()
  rentStartAt: Date;

  @IsOptional()
  @IsDate()
  rentEndAt: Date;

  @IsNotEmpty()
  @ValidateNested()
  // @Type(() => SpaceType)
  spaceType: SpaceType;

  @IsNotEmpty()
  @ValidateNested()
  // @Type(() => Caracteristics)
  caracteristics: Caracteristics;
}
