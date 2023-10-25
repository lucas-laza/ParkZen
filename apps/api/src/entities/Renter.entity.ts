// renter.model.ts
export class Renter {
  id: number;
  firstName: string;
  lastName: string;

  constructor(data: Renter) {
    // this.id = data.id;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
  }
}
