import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { json, raw } from 'express';
import * as bodyParse from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://next-mobile-ebon.vercel.app'],
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  // fix payload too large
  // app.use(raw({ limit: '10mb', type: "*/*" }));
  // app.use(bodyParse.json({ limit: '20mb' }));
  // app.use(bodyParse.urlencoded({ limit: '10mb', extended: true }));

  await app.listen(process.env.PORT || 4000, () => {
    console.log(`App running on port:${process.env.PORT}`);
  });
}
bootstrap();
