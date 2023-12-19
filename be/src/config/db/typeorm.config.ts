import { Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

const logger = new Logger('typeorm.config.ts');
export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    logger.log(`type: ${configService.get('DB_TYPE')}`);
    logger.log(`host: ${configService.get('DB_HOST')}`);
    logger.log(`port: ${configService.get('DB_PORT')}`);
    logger.log(`username: ${configService.get('DB_USERNAME')}`);
    logger.log(`password: ${configService.get('DB_PASSWORD')}`);
    logger.log(`database: ${configService.get('DB_DATABASE')}`);
    logger.log(`synchronize: ${configService.get('DB_SYNCHRONIZE')}`);

    const option = {
      type: configService.get('DB_TYPE'),
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: configService.get('DB_SYNCHRONIZE'),
    };
    return option;
  },
};
