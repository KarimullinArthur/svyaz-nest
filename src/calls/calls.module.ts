import { Module } from '@nestjs/common';
import { CallsGateway } from './calls.gateway';
import { UserModule } from 'src/users/users.module';

@Module({
  providers:[CallsGateway],
})
export class CallsModule {}
