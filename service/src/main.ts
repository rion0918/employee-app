// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['https://employee-app-six-chi.vercel.app'],
      credentials: true,
    },
  });
  await app.listen(3000);
}
bootstrap();