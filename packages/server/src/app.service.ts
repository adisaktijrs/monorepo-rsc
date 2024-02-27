import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello My World <3';
  }

  async getSlowData() {
    await new Promise((r) => setTimeout(r, 3000));
    return {
      msg: 'better use an interceptor but nvm, who cares lol',
      data: `Send a slow data. Server time: ${new Date().toLocaleTimeString()}`,
    };
  }

  async getSuperSlowData() {
    await new Promise((r) => setTimeout(r, 5000));
    return {
      msg: 'better use an interceptor but nvm, who cares lol',
      data: 'Send a super slow data',
    };
  }

  getChartData() {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ];
    return {
      msg: 'better use an interceptor but nvm, who cares lol',
      data: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
  }
}
