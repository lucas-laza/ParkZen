// address.model.ts
export class Address {
  street: string;
  city: string;
  zipCode: string;

  constructor(data) {
    this.street = data.street;
    this.city = data.city;
    this.zipCode = data.zipCode;
  }
}
