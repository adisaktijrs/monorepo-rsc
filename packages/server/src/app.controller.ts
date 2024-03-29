import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/slow')
  getSlow() {
    return this.appService.getSlowData();
  }

  @Get('/slowest')
  getSuperSlow() {
    return this.appService.getSuperSlowData();
  }

  @Get('/charts')
  getCharts() {
    return this.appService.getChartData();
  }
}
