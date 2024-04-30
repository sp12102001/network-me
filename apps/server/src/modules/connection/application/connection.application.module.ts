import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ConnectionDomainModule } from '../domain'
import { ConnectionController } from './connection.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ConnectionByUserController } from './connectionByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ConnectionDomainModule,

    UserDomainModule,
  ],
  controllers: [ConnectionController, ConnectionByUserController],
  providers: [],
})
export class ConnectionApplicationModule {}
