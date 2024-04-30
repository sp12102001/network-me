import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { SearchDomainFacade } from '@server/modules/search/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { SearchApplicationEvent } from './search.application.event'
import { SearchCreateDto } from './search.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class SearchByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private searchDomainFacade: SearchDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/searchs')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.searchDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/searchs')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: SearchCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.searchDomainFacade.create(valuesUpdated)

    await this.eventService.emit<SearchApplicationEvent.SearchCreated.Payload>(
      SearchApplicationEvent.SearchCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
