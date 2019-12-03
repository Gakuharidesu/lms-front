import createPersistedState from 'vuex-persistedstate'
interface MyWindow extends Window {
  onNuxtReady: any
}
declare let window: MyWindow

export default ({ store, isHMR }) => {
  // In case of HMR, mutation occurs before nuxReady, so previously saved state
  // gets replaced with original state received from server. So, we've to skip HMR.
  // Also nuxtReady event fires for HMR as well, which results multiple registration of
  // vuex-persistedstate plugin
  if (isHMR) { return }

  if (process.client) {
    window.onNuxtReady((nuxt) => {
      createPersistedState({
        key: 'LMS',
        paths: ['auth.remenber', 'auth.limit', 'auth.token'],
        storage: window.localStorage
      })(store)
    })
  }
}
