// caracteristics.model.ts
export class Caracteristics {
  isPublic: boolean;
  isIndoor: boolean;

  constructor(data: Caracteristics) {
    this.isPublic = data.isPublic;
    this.isIndoor = data.isIndoor;
  }
}
