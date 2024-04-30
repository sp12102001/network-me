import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { SearchDomainModule } from '../domain'
import { SearchController } from './search.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { SearchByUserController } from './searchByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, SearchDomainModule, UserDomainModule],
  controllers: [SearchController, SearchByUserController],
  providers: [],
})
export class SearchApplicationModule {}
