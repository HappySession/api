import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ww3 } from './interfaces/ww3.interface';

@Injectable()
export class Ww3Service {
  constructor(@InjectModel('Ww3') private readonly ww3Model: Model<Ww3>) {}

  async findByLatLon(): Promise<Ww3[]> {
    return await this.ww3Model.find().exec();
  }
}
