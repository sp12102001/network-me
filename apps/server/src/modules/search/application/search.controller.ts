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
import { Search, SearchDomainFacade } from '@server/modules/search/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { SearchApplicationEvent } from './search.application.event'
import { SearchCreateDto, SearchUpdateDto } from './search.dto'

@Controller('/v1/searchs')
export class SearchController {
  constructor(
    private eventService: EventService,
    private searchDomainFacade: SearchDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.searchDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: SearchCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.searchDomainFacade.create(body)

    await this.eventService.emit<SearchApplicationEvent.SearchCreated.Payload>(
      SearchApplicationEvent.SearchCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:searchId')
  async findOne(@Param('searchId') searchId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.searchDomainFacade.findOneByIdOrFail(
      searchId,
      queryOptions,
    )

    return item
  }

  @Patch('/:searchId')
  async update(
    @Param('searchId') searchId: string,
    @Body() body: SearchUpdateDto,
  ) {
    const item = await this.searchDomainFacade.findOneByIdOrFail(searchId)

    const itemUpdated = await this.searchDomainFacade.update(
      item,
      body as Partial<Search>,
    )
    return itemUpdated
  }

  @Delete('/:searchId')
  async delete(@Param('searchId') searchId: string) {
    const item = await this.searchDomainFacade.findOneByIdOrFail(searchId)

    await this.searchDomainFacade.delete(item)

    return item
  }
}
