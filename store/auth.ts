import { ActionTree, MutationTree, Store, GetterTree } from 'vuex'
import moment from 'moment'
import AuthState from '@/models/interface/AuthState'
import { LoginApi, RefreshApi } from '@/models/class/api/login'

const initialState: AuthState = {
  token: '',
  remember: false,
  limit: 0
}

export const state = (): AuthState => Object.assign({}, initialState)

export const mutations: MutationTree<AuthState> = {
  setToken (state, payload) {
    state.token = payload
  },
  removeToken (state) {
    const localLMS: string = localStorage.getItem('localLMS') || ''
    const strageData = localLMS ? JSON.parse(localLMS) : ''
    const checked: boolean =
      !!strageData && !!strageData.auth ? !!strageData.auth.remember : false
    const token = ''
    const limit = 0
    state.token = token
    state.limit = limit
    state.remember = checked
    const obj = {
      auth: {
        remember: checked,
        limit,
        token
      }
    }
    localStorage.setItem('LMS', JSON.stringify(obj))
  },
  setRemember (state, payload) {
    state.remember = payload
  },
  setTokenLimit (state, payload) {
    const now = moment().unix()
    // 有効期限UNIX時刻を保存
    const limit = now + payload
    state.limit = limit
  },
  removeTokenLimit (state) {
    state.limit = 0
  }
}

export const actions: ActionTree<AuthState, AuthState> = {
  async fetchToken ({ commit }, payload) {
    try {
      const { data } = await LoginApi.getInstance.sendAsync(payload, null)
      commit('setToken', data.access_token)
      commit('setTokenLimit', data.expires_in)
    } catch (e) {
      console.log(e.response)
    }
  },
  async refreshToken ({ commit }) {
    try {
      const { data } = await RefreshApi.getInstance.sendAsync(null, null)
      commit('setToken', data.access_token)
      commit('setTokenLimit', data.expires_in)
    } catch (e) {
      console.log(e.response)
    }
  }
}
