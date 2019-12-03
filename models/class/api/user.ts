import BaseApi, { HttpMethods } from '@/models/class/BaseApi'
import {
  UserPutRequest,
  UserPostRequest
} from '@/models/interface/request/User'
import { User } from '~/models/interface/User'

class UserPutApi extends BaseApi<UserPutRequest, User> {
  protected endPoint = 'user'
  protected readonly method = HttpMethods.Put
  public static get getInstance (): UserPutApi {
    return (
      UserPutApi._instance || (UserPutApi._instance = new UserPutApi())
    )
  }
}

class MypageGetApi extends BaseApi<undefined, User> {
  protected endPoint = 'mypage'
  protected readonly method = HttpMethods.Post
  public static get getInstance (): MypageGetApi {
    return (
      MypageGetApi._instance || (MypageGetApi._instance = new MypageGetApi())
    )
  }
}

class UserGetApi extends BaseApi<undefined, User> {
  protected endpoint = 'user'
  protected readonly method = HttpMethods.Get
  public static get getInstance (): UserGetApi {
    return UserGetApi._instance || (UserGetApi._instance = new UserGetApi())
  }
}

class UserGetMatchingListApi extends BaseApi<undefined, Array<User>> {
  protected endPoint = 'user/mathing_list'
  protected readonly method = HttpMethods.Get
  public static get getInstance (): UserGetApi {
    return UserGetApi._instance || (UserGetApi._instance = new UserGetApi())
  }
}

class UserPostApi extends BaseApi<UserPostRequest, User> {
  protected endPoint = 'user'
  protected readonly method = HttpMethods.Post
  public static get getInstance (): UserPostApi {
    return (
      UserPostApi._instance || (UserPostApi._instance = new UserPostApi())
    )
  }
}

export { UserGetApi, UserPostApi, UserGetMatchingListApi, UserPutApi, MypageGetApi }
