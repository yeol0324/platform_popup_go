import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from 'src/config/db/typeorm-ex.module';
import { ApiConnectionRepository } from './api-connection.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([ApiConnectionRepository])],
  controllers: [CommonController],
  providers: [CommonService],
})
export class CommonModule {}
