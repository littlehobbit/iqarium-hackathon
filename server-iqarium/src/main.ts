import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from "express";

var cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

}
bootstrap();
