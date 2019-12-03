import BaseApi, { HttpMethods } from '@/models/class/BaseApi'
import {
  SwipePostRequest
} from '@/models/interface/request/Swipe'
import { SwipeResult } from '~/models/interface/SwipeResult'

class SwipePostApi extends BaseApi<SwipePostRequest, SwipeResult> {
  protected endPoint = 'v1/Swipe'
  protected readonly method = HttpMethods.Post
  public static get getInstance (): SwipePostApi {
    return (
      SwipePostApi._instance || (SwipePostApi._instance = new SwipePostApi())
    )
  }
}

export { SwipePostApi }
