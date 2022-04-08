import { Module } from '@nestjs/common';
import { ImgReqController } from './controllers/img-req/img-req.controller';
import { ImgReqService } from './services/img-req/img-req.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RequestEntity} from "../typeorm/request.entity";

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity])],
  controllers: [ImgReqController],
  providers: [ImgReqService]
})
export class ImgRequestModule {}
