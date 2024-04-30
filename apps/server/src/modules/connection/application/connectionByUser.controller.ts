import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ConnectionDomainFacade } from '@server/modules/connection/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ConnectionApplicationEvent } from './connection.application.event'
import { ConnectionCreateDto } from './connection.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class ConnectionByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private connectionDomainFacade: ConnectionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/userId1/:userId1Id/connections')
  async findManyUserId1Id(
    @Param('userId1Id') userId1Id: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId1Id)

    const items = await this.connectionDomainFacade.findManyByUserId1(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/userId1/:userId1Id/connections')
  async createByUserId1Id(
    @Param('userId1Id') userId1Id: string,
    @Body() body: ConnectionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId1Id }

    const item = await this.connectionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ConnectionApplicationEvent.ConnectionCreated.Payload>(
      ConnectionApplicationEvent.ConnectionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/userId2/:userId2Id/connections')
  async findManyUserId2Id(
    @Param('userId2Id') userId2Id: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId2Id)

    const items = await this.connectionDomainFacade.findManyByUserId2(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/userId2/:userId2Id/connections')
  async createByUserId2Id(
    @Param('userId2Id') userId2Id: string,
    @Body() body: ConnectionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId2Id }

    const item = await this.connectionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ConnectionApplicationEvent.ConnectionCreated.Payload>(
      ConnectionApplicationEvent.ConnectionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
