import { Test, TestingModule } from '@nestjs/testing';
import { ImgReqController } from './img-req.controller';

describe('ImgReqController', () => {
  let controller: ImgReqController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImgReqController],
    }).compile();

    controller = module.get<ImgReqController>(ImgReqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
