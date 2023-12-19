import { Repository } from 'typeorm';
import { ApiConnection } from './entity/api-connection.entity';
import { CustomRepository } from 'src/config/db/typeorm-ex.decorator';
import { Logger } from '@nestjs/common';

@CustomRepository(ApiConnection)
export class ApiConnectionRepository extends Repository<ApiConnection> {
  private logger = new Logger(this.constructor.name);

  async insertApiConnection(ip: string): Promise<void> {
    this.logger.log(`${ip} api connection insert`);
    const apiConnection = this.create({ ip });
    await this.save(apiConnection);
  }
}
