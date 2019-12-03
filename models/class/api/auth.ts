import BaseApi, { HttpMethods } from '@/models/class/BaseApi'

class LogoutApi extends BaseApi<null, null> {
  protected endPoint = 'logout'
  protected readonly method = HttpMethods.Post
  public static get getInstance (): LogoutApi {
    return LogoutApi._instance || (LogoutApi._instance = new LogoutApi())
  }
}

export { LogoutApi }
