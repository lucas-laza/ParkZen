// space-type.model.ts
export class SpaceType {
  id: number;
  name: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
}