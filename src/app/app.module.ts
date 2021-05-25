import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Modules from '../modules/index';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/${process.env.NODE_ENV}.env`
    }),
    DatabaseModule,
    ...Modules
  ],
})
export class AppModule {}
