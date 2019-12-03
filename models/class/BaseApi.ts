import { AxiosInstance, AxiosResponse } from 'axios'

let axiosInstance: AxiosInstance
export function setAxiosInstance (axios: AxiosInstance) {
  axiosInstance = axios
}

export enum HttpMethods {
  Get,
  Post,
  Put,
  Delete
}

abstract class BaseApi<Request, Response> {
  protected static _instance?: any
  protected constructor () {
    return this
  }

  protected readonly endPoint!: string
  protected readonly method!: HttpMethods
  protected isStore = false

  /**
   *
   * @param data 意図しないリクエストを修正するためのメソッド
   */
  protected convertRequest (request: any): Request {
    return request
  }

  /**
   * 意図しないレスポンスを修正するためのメソッド
   * @param data
   */
  protected convertResponse (response: any): Response {
    return response
  }

  public async sendAsync (
    request: Request,
    id: string | number | null
  ): Promise<AxiosResponse<Response>> {
    switch (this.method) {
      case HttpMethods.Get: {
        const response = await axiosInstance.get<Response>(
          id ? `${this.endPoint}/${id}` : this.endPoint,
          {
            params: this.convertRequest(request)
          }
        )
        if (response && BaseApi.isSuccess(response.status) && response.data) {
          response.data = this.convertResponse(response.data)
        }
        return response
      }
      case HttpMethods.Post: {
        const response = await BaseApi.postAsync<Request, Response>(
          axiosInstance,
          id ? `${this.endPoint}/${id}` : this.endPoint,
          this.convertRequest(request)
        )
        if (response && BaseApi.isSuccess(response.status) && response.data) {
          response.data = this.convertResponse(response.data)
        }
        return response
      }
      case HttpMethods.Delete: {
        const response = await BaseApi.deleteAsync<Request, Response>(
          axiosInstance,
          `${this.endPoint}/${id}`,
          this.convertRequest(request)
        )
        if (response && BaseApi.isSuccess(response.status) && response.data) {
          response.data = this.convertResponse(response.data)
        }
        return response
      }
      case HttpMethods.Put: {
        const response = await BaseApi.putAsync<Request, Response>(
          axiosInstance,
          id ? `${this.endPoint}/${id}` : this.endPoint,
          this.convertRequest(request)
        )
        if (response && BaseApi.isSuccess(response.status) && response.data) {
          response.data = this.convertResponse(response.data)
        }
        return response
      }
    }
    return (Response as any).empty()
  }

  private static async getAsync<Request, Response> (
    axios: AxiosInstance,
    endPoint: string,
    request: Request
  ): Promise<Response> {
    const response = await axios.get<Response>(endPoint, {
      params: request
    })
    if (response && BaseApi.isSuccess(response.status)) {
      return response.data
    }
    return response ? response.data : (undefined as any)
  }

  public async getAsync<Request, Response> (
    request: Request
  ): Promise<Response> {
    const response = await BaseApi.getAsync<Request, Response>(
      axiosInstance,
      this.endPoint,
      this.convertRequest(request) as any
    )
    return this.convertResponse(response) as any
  }

  private static async postAsync<Request, Response> (
    axios: AxiosInstance,
    endPoint: string,
    request: Request
  ): Promise<AxiosResponse<Response>> {
    const response = await axios.post<Response>(endPoint, request)
    return response
  }

  private static async putAsync<Request, Response> (
    axios: AxiosInstance,
    endPoint: string,
    request: Request
  ): Promise<AxiosResponse<Response>> {
    const response = await axios.put<Response>(endPoint, request)
    return response
  }

  private static async deleteAsync<Request, Response> (
    axios: AxiosInstance,
    endPoint: string,
    request: Request
  ): Promise<AxiosResponse<Response>> {
    const response = await axios.delete<Response>(endPoint, {
      data: request
    })
    return response
  }

  private static isSuccess (statusCode: number) {
    return statusCode >= 200 && statusCode < 300
  }
}

export default BaseApi
