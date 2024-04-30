import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Search } from './search.model'

export class SearchApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Search>,
  ): Promise<Search[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/searchs${buildOptions}`)
  }

  static findOne(
    searchId: string,
    queryOptions?: ApiHelper.QueryOptions<Search>,
  ): Promise<Search> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/searchs/${searchId}${buildOptions}`)
  }

  static createOne(values: Partial<Search>): Promise<Search> {
    return HttpService.api.post(`/v1/searchs`, values)
  }

  static updateOne(searchId: string, values: Partial<Search>): Promise<Search> {
    return HttpService.api.patch(`/v1/searchs/${searchId}`, values)
  }

  static deleteOne(searchId: string): Promise<void> {
    return HttpService.api.delete(`/v1/searchs/${searchId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Search>,
  ): Promise<Search[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/searchs${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Search>,
  ): Promise<Search> {
    return HttpService.api.post(`/v1/users/user/${userId}/searchs`, values)
  }
}
