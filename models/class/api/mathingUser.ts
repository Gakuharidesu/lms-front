import BaseApi, { HttpMethods } from '@/models/class/BaseApi'
import {
  MatchingUserListGetRequest
} from '@/models/interface/request/MatchingUser'
import { MatchingUser } from '~/models/interface/MatchingUser'

class MatchingUserListGetApi extends BaseApi<MatchingUserListGetRequest, MatchingUser> {
  protected endPoint = ''
  protected readonly method = HttpMethods.Get
  public static get getInstance (): MatchingUserListGetApi {
    return (
      MatchingUserListGetApi._instance || (MatchingUserListGetApi._instance = new MatchingUserListGetApi())
    )
  }
}

export { MatchingUserListGetApi }
