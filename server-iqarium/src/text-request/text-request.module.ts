import { Module } from '@nestjs/common';
import { MailController } from './controllers/mail/mail.controller';
import { FormController } from './controllers/form/form.controller';
import { FormService } from './services/form/form.service';
import { MailService } from './services/mail/mail.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RequestEntity} from "../typeorm/request.entity";
import {CategoryEntity, ReplyEntity, RequestApproveEntity} from "../typeorm";
import {LabelingService} from "../category-analysis/services/labeling/labeling.service";

@Module({
  imports: [
      TypeOrmModule.forFeature([RequestEntity]),
      TypeOrmModule.forFeature([RequestApproveEntity]),
      TypeOrmModule.forFeature([ReplyEntity]),
      TypeOrmModule.forFeature([CategoryEntity]),],
  controllers: [MailController, FormController],
  providers: [FormService, MailService, LabelingService]
})
export class TextRequestModule {}
