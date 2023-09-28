// caracteristics.model.ts
export class Caracteristics {
  isPublic: boolean;
  isIndoor: boolean;

  constructor(data) {
    this.isPublic = data.isPublic;
    this.isIndoor = data.isIndoor;
  }
}