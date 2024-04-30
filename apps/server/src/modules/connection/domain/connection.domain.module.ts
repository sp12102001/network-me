import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ConnectionDomainFacade } from './connection.domain.facade'
import { Connection } from './connection.model'

@Module({
  imports: [TypeOrmModule.forFeature([Connection]), DatabaseHelperModule],
  providers: [ConnectionDomainFacade, ConnectionDomainFacade],
  exports: [ConnectionDomainFacade],
})
export class ConnectionDomainModule {}
