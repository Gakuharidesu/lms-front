<template>
  <div>
    <section>
      <div>
        <h2 id="lms">
          Login page
        </h2>
        <p><span>{{ errorMessage }}</span></p>
        <form method="post">
          <input
            v-model="param.email"
            type="text"
            name="id"
            placeholder="E-MAIL"
          >
          <input
            v-model="param.password"
            type="text"
            name="pass"
            placeholder="password"
          >
          <label>
            <input
              v-model="param.checked"
              type="checkbox"
              name="remember"
              :checked="param.checked"
            >
            <span>ログインしたままにする</span>
          </label>
          <button type="button" @click="login">
            ログイン
          </button>
        </form>
      </div>
      <p>
        パスワードをお忘れの場合は
        <nuxt-link to="/pw-reset">
          こちら
        </nuxt-link>へ
      </p>
      <br>
      <CreateUser
        text="ユーザー登録はこちらから"
      />
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { LoginApi } from '@/models/class/api/login'
import { LoginRequest } from '@/models/interface/request/Login'
import CreateUser from '@/components/user/Create.vue'

const localLMS: string = localStorage.getItem('LMS') || ''
const strageData = localLMS ? JSON.parse(localLMS) : ''
const checked: boolean =
  !!strageData && !!strageData.auth ? !!strageData.auth.remenber : false

@Component({
  layout: 'notLogin',
  components: {
    CreateUser
  }
})
export default class extends Vue {
  token: string = ''
  errorMessage = ''
  param = {
    email: 'hoge@gmail.com', // [TODO] リリース前には空文字にすること
    password: 'pass', // [TODO] リリース前には空文字にすること
    checked
  }

  async login () {
    this.errorMessage = ''
    const request: LoginRequest = this.param
    try {
      const { data } = await LoginApi.getInstance.sendAsync(request, null)
      this.$store.commit('auth/setToken', data.access_token)
      this.$store.commit('auth/setTokenLimit', data.expires_in)
      window.location.href = '/home'
    } catch (e) {
      this.errorMessage = e.response.data.error
    }
  }
}
</script>
<style lang="sass" scoped>
// cssTest
h2
  color: red
</style>
