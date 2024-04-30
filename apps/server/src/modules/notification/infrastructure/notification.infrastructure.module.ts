import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationPostDataSubscriber } from './subscribers/notification.postData.subscriber'

import { NotificationCommentSubscriber } from './subscribers/notification.comment.subscriber'

import { NotificationConnectionSubscriber } from './subscribers/notification.connection.subscriber'

import { NotificationSearchSubscriber } from './subscribers/notification.search.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationPostDataSubscriber,

    NotificationCommentSubscriber,

    NotificationConnectionSubscriber,

    NotificationSearchSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
