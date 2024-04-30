import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Connection } from './connection.model'

export class ConnectionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Connection>,
  ): Promise<Connection[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/connections${buildOptions}`)
  }

  static findOne(
    connectionId: string,
    queryOptions?: ApiHelper.QueryOptions<Connection>,
  ): Promise<Connection> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/connections/${connectionId}${buildOptions}`)
  }

  static createOne(values: Partial<Connection>): Promise<Connection> {
    return HttpService.api.post(`/v1/connections`, values)
  }

  static updateOne(
    connectionId: string,
    values: Partial<Connection>,
  ): Promise<Connection> {
    return HttpService.api.patch(`/v1/connections/${connectionId}`, values)
  }

  static deleteOne(connectionId: string): Promise<void> {
    return HttpService.api.delete(`/v1/connections/${connectionId}`)
  }

  static findManyByUserId1Id(
    userId1Id: string,
    queryOptions?: ApiHelper.QueryOptions<Connection>,
  ): Promise<Connection[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/userId1/${userId1Id}/connections${buildOptions}`,
    )
  }

  static createOneByUserId1Id(
    userId1Id: string,
    values: Partial<Connection>,
  ): Promise<Connection> {
    return HttpService.api.post(
      `/v1/users/userId1/${userId1Id}/connections`,
      values,
    )
  }

  static findManyByUserId2Id(
    userId2Id: string,
    queryOptions?: ApiHelper.QueryOptions<Connection>,
  ): Promise<Connection[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/userId2/${userId2Id}/connections${buildOptions}`,
    )
  }

  static createOneByUserId2Id(
    userId2Id: string,
    values: Partial<Connection>,
  ): Promise<Connection> {
    return HttpService.api.post(
      `/v1/users/userId2/${userId2Id}/connections`,
      values,
    )
  }
}
