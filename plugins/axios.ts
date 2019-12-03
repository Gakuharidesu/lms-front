import { AxiosRequestConfig, AxiosError } from 'axios'
import { setAxiosInstance } from '@/models/class/BaseApi'

export default function ({ $axios, store, route }) {
  setAxiosInstance($axios)

  $axios.onRequest((config: AxiosRequestConfig) => {
    let isJson: boolean = false

    if (config.url) {
      const url = config.url as string
      isJson = /.json$/.test(url)
    }

    if (!config.url!.startsWith('https') || config.url!.startsWith('http')) {
      config.url = isJson
        ? process.env.apiBaseUrlDev! + config.url
        : process.env.apiBaseUrl! + config.url
    }

    const localLMS: string = localStorage.getItem('LMS') || ''
    const strageData = localLMS ? JSON.parse(localLMS) : ''
    const token =
      !!strageData && !!strageData.auth.token ? strageData.auth.token : ''

    console.log('axios token=' + token)

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    config.headers.Pragma = 'no-cache'
  })

  $axios.onError((error: AxiosError) => {
    const code = error.response!.status
    console.log('axiosエラー')
    console.log(error.response)

    switch (code) {
      case 400:
        return error.response
      case 401:
        // 認証エラーの際は、トークンを消す(トークンを消すとmiddleware/authでログインページに飛ぶ)
        store.commit('auth/removeToken', null, { root: true })
        // setTimeout(() => {
        //   window.location.href = `${process.env.redirectTo}${route.path}`
        // }, 3000)
        break
      case 404:
        return error.response
      case 422:
        return error.response
      case 500:
        return error.response
      default:
        return error.response
    }
  })
}
