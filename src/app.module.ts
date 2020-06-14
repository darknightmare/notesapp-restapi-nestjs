import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { MongoModule } from './database/mongo.module';

@Module({
  imports: [ApiModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
