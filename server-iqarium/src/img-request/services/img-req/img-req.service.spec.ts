import { Test, TestingModule } from '@nestjs/testing';
import { ImgReqService } from './img-req.service';

describe('ImgReqService', () => {
  let service: ImgReqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImgReqService],
    }).compile();

    service = module.get<ImgReqService>(ImgReqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
