import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ww3Controller } from './ww3.controller';
import { Ww3Service } from './ww3.service';
import { Ww3Schema } from './schema/ww3.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ww3', schema: Ww3Schema }])],
  controllers: [Ww3Controller],
  providers: [Ww3Service],
})
export class Ww3Module {}
