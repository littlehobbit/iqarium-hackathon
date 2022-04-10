import { Module } from '@nestjs/common';
import { ImgReqController } from './controllers/img-req/img-req.controller';
import { ImgReqService } from './services/img-req/img-req.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RequestEntity} from "../typeorm/request.entity";
import {CategoryEntity, ReplyEntity, RequestApproveEntity} from "../typeorm";
import {LabelingService} from "../category-analysis/services/labeling/labeling.service";

@Module({
  imports: [
      TypeOrmModule.forFeature([RequestEntity]),
      TypeOrmModule.forFeature([RequestApproveEntity]),
      TypeOrmModule.forFeature([ReplyEntity]),
      TypeOrmModule.forFeature([CategoryEntity]),
  ],
  controllers: [ImgReqController],
  providers: [ImgReqService, LabelingService]
})
export class ImgRequestModule {}
