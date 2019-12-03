import moment from 'moment'
import { LoginCheckApi } from '@/models/class/api/login'

export default async function ({ store, route, redirect }) {
  try {
    const { data } = await LoginCheckApi.getInstance.sendAsync(null, null)

    if (data) {
      // 認証済み loginページ以外も表示可能
      const localLMS: string = localStorage.getItem('LMS') || ''
      const strageData = localLMS ? JSON.parse(localLMS) : ''
      const now = moment().unix()
      const limit: number =
        !!strageData && !!strageData.auth ? strageData.auth.limit : 0
      if (!limit || (limit - now < 600 && limit - now > 1)) {
        // TODO:有効期限10分前の場合はトークンをリフレッシュする
        await store.commit('auth/removeTokenLimit')
        store.dispatch('auth/refreshToken')
      }
      if (/^\/login$/.test(route.path)) {
        redirect('/home')
      }
    }
  } catch (e) {
    if (!/^\/login$/.test(route.path)) {
      redirect('/login')
    }
  }
}
