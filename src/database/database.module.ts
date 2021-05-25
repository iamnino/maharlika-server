import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Models from '../models/index';


@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {

        const type: any = String(config.get<string>('DATABASE_CONNECTION'));
        const host: any = String(config.get<string>('DATABASE_HOST'));
        const port: any = Number(config.get<string>('DATABASE_PORT'));
        const username: any = String(config.get<string>('DATABASE_USERNAME'));
        const password: any = String(config.get<string>('DATABASE_PASSWORD'));
        const database: any = String(config.get<string>('DATABASE_NAME'));

        return {
          type,
          host,
          port,
          username,
          password,
          database,
          entities: Models,
          synchronize: false,
        };
      },
    }),
  ],
})

export class DatabaseModule {}
