import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);
  app.enableCors({
    origin: ['http://localhost:5174', 'http://localhost:3000'],
  });
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
