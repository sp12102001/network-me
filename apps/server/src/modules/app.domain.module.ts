import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { PostDataDomainModule } from './postData/domain'

import { CommentDomainModule } from './comment/domain'

import { ConnectionDomainModule } from './connection/domain'

import { SearchDomainModule } from './search/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    PostDataDomainModule,

    CommentDomainModule,

    ConnectionDomainModule,

    SearchDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
