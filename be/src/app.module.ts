import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/db/typeorm.config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`, `.${process.env.NEST_ENV}.env`], // env파일 경로 설정
    }),
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
