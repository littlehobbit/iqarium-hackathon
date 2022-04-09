import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CategoryEntity, ReplyEntity, RequestApproveEntity, RequestEntity} from "../typeorm";
import { CategoryAnalysisController } from './controllers/category-analysis/category-analysis.controller';
import { CategoryAnalysisService } from './services/category-analysis/category-analysis.service';
import {EventEmitterModule} from "@nestjs/event-emitter";
import { LabelingService } from './services/labeling/labeling.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([RequestEntity]),
        TypeOrmModule.forFeature([RequestApproveEntity]),
        TypeOrmModule.forFeature([ReplyEntity]),
        TypeOrmModule.forFeature([CategoryEntity]),
        EventEmitterModule.forRoot()

    ],
    controllers: [CategoryAnalysisController],
    providers: [CategoryAnalysisService, LabelingService],
})
export class CategoryAnalysisModule {}
