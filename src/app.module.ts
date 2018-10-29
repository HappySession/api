import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ww3Module } from './ww3/ww3.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo:27017/happy'), Ww3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
