import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextRequestModule } from './text-request/text-request.module';
import { ImgRequestModule } from './img-request/img-request.module';

@Module({
  imports: [TextRequestModule, ImgRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
