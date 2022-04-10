import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextRequestModule } from './text-request/text-request.module';
import { ImgRequestModule } from './img-request/img-request.module';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfigAsync} from "./config/typeorm.config";
import { CategoryAnalysisModule } from './category-analysis/category-analysis.module';

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true}),
      TypeOrmModule.forRootAsync(typeOrmConfigAsync),
      TextRequestModule,
      ImgRequestModule,
      CategoryAnalysisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


