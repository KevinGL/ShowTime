import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  private authService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
