import BaseApi, { HttpMethods } from '@/models/class/BaseApi'
import { LoginRequest } from '@/models/interface/request/Login'
import { Login } from '@/models/interface/Login'

class LoginCheckApi extends BaseApi<null, number> {
  protected endPoint = 'mypage'
  protected readonly method = HttpMethods.Get
  public static get getInstance (): LoginCheckApi {
    return (
      LoginCheckApi._instance || (LoginCheckApi._instance = new LoginCheckApi())
    )
  }
}

class LoginApi extends BaseApi<LoginRequest, Login> {
  protected endPoint = 'login'
  protected readonly method = HttpMethods.Post
  public static get getInstance (): LoginApi {
    return LoginApi._instance || (LoginApi._instance = new LoginApi())
  }
}

class RefreshApi extends BaseApi<null, Login> {
  protected endPoint = 'refresh'
  protected readonly method = HttpMethods.Post
  public static get getInstance (): RefreshApi {
    return RefreshApi._instance || (RefreshApi._instance = new RefreshApi())
  }
}

export { LoginApi, RefreshApi, LoginCheckApi }
