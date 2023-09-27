import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    // const coucou = 'oui';
    const a = 'a';
    console.log(a);
    return 'Coucou UwU';
  }
}
