import { Test, TestingModule } from '@nestjs/testing';
import { CategoryAnalysisController } from './category-analysis.controller';

describe('CategoryAnalysisController', () => {
  let controller: CategoryAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryAnalysisController],
    }).compile();

    controller = module.get<CategoryAnalysisController>(CategoryAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
