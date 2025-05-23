import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  app.enableCors({
    origin: ['http://localhost:5174', 'http://localhost:3000'],
  });
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
