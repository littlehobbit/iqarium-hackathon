import { Module } from '@nestjs/common';
import { ImgReqController } from './controllers/img-req/img-req.controller';
import { ImgReqService } from './services/img-req/img-req.service';

@Module({
  controllers: [ImgReqController],
  providers: [ImgReqService]
})
export class ImgRequestModule {}
