import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('main.ts');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  logger.log(`NEST_ENV = ${process.env.NEST_ENV}`); // cross-env 확인
  logger.log(`PROFILE = ${process.env.PROFILE}`); // 프로파일별 env 잘 불러오는지 확인

  const port = process.env.SERVER_PORT; // 포트번호 확인
  logger.log(`PORT = ${port}`);

  await app.listen(port);
}
bootstrap();
