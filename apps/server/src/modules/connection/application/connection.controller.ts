import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  Connection,
  ConnectionDomainFacade,
} from '@server/modules/connection/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ConnectionApplicationEvent } from './connection.application.event'
import { ConnectionCreateDto, ConnectionUpdateDto } from './connection.dto'

@Controller('/v1/connections')
export class ConnectionController {
  constructor(
    private eventService: EventService,
    private connectionDomainFacade: ConnectionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.connectionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ConnectionCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.connectionDomainFacade.create(body)

    await this.eventService.emit<ConnectionApplicationEvent.ConnectionCreated.Payload>(
      ConnectionApplicationEvent.ConnectionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:connectionId')
  async findOne(
    @Param('connectionId') connectionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.connectionDomainFacade.findOneByIdOrFail(
      connectionId,
      queryOptions,
    )

    return item
  }

  @Patch('/:connectionId')
  async update(
    @Param('connectionId') connectionId: string,
    @Body() body: ConnectionUpdateDto,
  ) {
    const item =
      await this.connectionDomainFacade.findOneByIdOrFail(connectionId)

    const itemUpdated = await this.connectionDomainFacade.update(
      item,
      body as Partial<Connection>,
    )
    return itemUpdated
  }

  @Delete('/:connectionId')
  async delete(@Param('connectionId') connectionId: string) {
    const item =
      await this.connectionDomainFacade.findOneByIdOrFail(connectionId)

    await this.connectionDomainFacade.delete(item)

    return item
  }
}
