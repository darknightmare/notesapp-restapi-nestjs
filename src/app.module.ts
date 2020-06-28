import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiModule } from './api/api.module';
import { MongoModule } from './database/mongo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ApiModule, MongoModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
