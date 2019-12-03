<template>
  <v-container>
    <p>tyer</p>
    <v-btn
      @click="logout"
    >
      ログアウト
    </v-btn>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { User } from '@/models/interface/User'
import { MypageGetApi } from '@/models/class/api/user'
import { LogoutApi } from '@/models/class/api/auth'

@Component({
  asyncData: async () => {
    const response = await MypageGetApi.getInstance.sendAsync(
      undefined,
      null
    )
    return {
      user: response.data
    }
  }
})
export default class extends Vue {
  user!: User

  async logout () {
    await LogoutApi.getInstance.sendAsync(null, null)
    this.$store.commit('auth/removeToken')
    this.$store.commit('auth/removeTokenLimit')
    window.location.href = '/'
  }
}
</script>
