import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  
  app.enableCors({
    origin: ['http://localhost:5174', 'http://localhost:3000'],
    credentials: true,
  });

  await app.listen(process.env.port ?? 3000);
}
bootstrap();
