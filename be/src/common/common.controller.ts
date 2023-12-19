import { Controller, Get, Logger, Req } from '@nestjs/common';
import { CommonService } from './common.service';
import { Request } from 'express';

@Controller('common')
export class CommonController {
  private logger = new Logger(this.constructor.name);
  constructor(private commonService: CommonService) {}

  @Get('/check')
  checkApi(@Req() request: Request): Promise<string> {
    const ip = request.ip;
    this.logger.log(`ip : ${ip}`);
    return this.commonService.checkApi(ip);
  }
}
