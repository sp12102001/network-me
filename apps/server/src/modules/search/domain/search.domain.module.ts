import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { SearchDomainFacade } from './search.domain.facade'
import { Search } from './search.model'

@Module({
  imports: [TypeOrmModule.forFeature([Search]), DatabaseHelperModule],
  providers: [SearchDomainFacade, SearchDomainFacade],
  exports: [SearchDomainFacade],
})
export class SearchDomainModule {}
