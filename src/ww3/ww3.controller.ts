import { Controller, Get } from '@nestjs/common';
import { Ww3Service } from './ww3.service';
import { Ww3 } from './interfaces/ww3.interface';

@Controller('ww3')
export class Ww3Controller {
  constructor(private readonly ww3Service: Ww3Service) {}

  @Get()
  findByLatLon(): Promise<Ww3[]> {
    return this.ww3Service.findByLatLon();
  }
}
