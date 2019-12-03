<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
      <Button :text="text" color="blue" size="cs" v-on="on" />
    </template>
    <div>
      <p>create user</p>
      <form method="post">
        <input
          v-model="user.email"
          type="text"
          name="id"
          placeholder="E-MAIL"
        >
        <input
          v-model="user.password"
          type="text"
          name="pass"
          placeholder="password"
        >
        <button type="button" @click="create">
          ユーザー作成
        </button>
      </form>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { User } from '@/models/interface/User'
import { UserPostApi } from '@/models/class/api/user'
import { UserPostRequest } from '@/models/interface/request/User'
import { validateErrors } from '@/models/interface/Common'
import Button from '@/components/common/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class extends Vue {
  dialog: boolean = false
  user: User = User.empty()
  errors: validateErrors = {}

  @Prop({})
  text!: string

  close () {
    this.dialog = false
  }

  async create () {
    const request: UserPostRequest = this.user
    const response: any = await UserPostApi.getInstance.sendAsync(request, null)
    console.log('response' + JSON.stringify(response))
    if (response.status === 201) {
      this.close()
      return this.$router.push('/login')
    }

    this.errors = response.data.errors ? response.data.errors : {}
  }
}
</script>
