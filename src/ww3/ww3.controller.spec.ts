import { Test, TestingModule } from '@nestjs/testing';
import { Ww3Controller } from './ww3.controller';

describe('Ww3 Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [Ww3Controller],
    }).compile();
  });
  it('should be defined', () => {
    const controller: Ww3Controller = module.get<Ww3Controller>(Ww3Controller);
    expect(controller).toBeDefined();
  });
});
