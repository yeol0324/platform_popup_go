import { ApiConnectionRepository } from './api-connection.repository';
import { ApiConnection } from './entity/api-connection.entity';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CommonService {
  private logger = new Logger(this.constructor.name);
  constructor(private apiConnectionRepository: ApiConnectionRepository) {}

  async checkApi(ip: string): Promise<string> {
    this.logger.log(`${ip} is connecting...`);
    await this.apiConnectionRepository.insertApiConnection(ip);
    return 'API Checked';
  }
}
