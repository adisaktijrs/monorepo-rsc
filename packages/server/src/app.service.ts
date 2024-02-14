import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello My World <3';
  }

  async getSlowData() {
    await new Promise((r) => setTimeout(r, 3000));
    return 'Send slow data';
  }

  async getSuperSlowData() {
    await new Promise((r) => setTimeout(r, 6000));
    return 'Send super slow data';
  }
}
