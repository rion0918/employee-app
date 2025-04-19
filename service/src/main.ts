import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000', // ← Next.js のURL
      credentials: true,
    },
  });

  await app.listen(4000); // ← ポートは4000にしてる前提
}
bootstrap();