import { Test, TestingModule } from '@nestjs/testing';
import { Ww3Service } from './ww3.service';

describe('Ww3Service', () => {
  let service: Ww3Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ww3Service],
    }).compile();
    service = module.get<Ww3Service>(Ww3Service);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
