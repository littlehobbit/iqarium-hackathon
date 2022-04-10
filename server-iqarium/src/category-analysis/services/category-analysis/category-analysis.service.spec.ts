import { Test, TestingModule } from '@nestjs/testing';
import { CategoryAnalysisService } from './category-analysis.service';

describe('CategoryAnalysisService', () => {
  let service: CategoryAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryAnalysisService],
    }).compile();

    service = module.get<CategoryAnalysisService>(CategoryAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
