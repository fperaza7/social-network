import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'apps/auth/src/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +(process.env.DB_PORT || 5432),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Post]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ], 
  controllers: [PostsController],
  providers: [PostsService, JwtStrategy],
})
export class PostsModule {}
