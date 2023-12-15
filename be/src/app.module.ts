import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`, `.${process.env.NEST_ENV}.env`], // env파일 경로 설정
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
