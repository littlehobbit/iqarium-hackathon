import { Test, TestingModule } from '@nestjs/testing';
import { LabelingService } from './labeling.service';

describe('LabelService', () => {
  let service: LabelingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabelingService],
    }).compile();

    service = module.get<LabelingService>(LabelingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
