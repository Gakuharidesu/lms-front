<template>
  <v-container>
    <p>Chat page</p>
    <UserList
      :user-list="userList"
    />
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { User } from '@/models/interface/User'
import { UserGetMatchingListApi } from '@/models/class/api/user'
import Pagination from '@/models/interface/Pagination'
import UserList from '@/components/chat/List.vue'

@Component({
  components: {
    UserList
  },
  asyncData: async (context) => {
    const id = context.params.id
    const userList = await UserGetMatchingListApi.getInstance.sendAsync(undefined, id)
    // const [matchList, userList] = await Promise.all([
    //   UserGetMatchingListApi.getInstance.sendAsync(undefined, id),
    //   UserGetApi.getInstance.sendAsync(undefined, id)
    // ])
    return {
      userList: userList.data
    }
  }
})
export default class extends Vue {
  userList!: Array<User>
  matchList!: Array<User>
  pagination!: Pagination
  loading: boolean = false

  async search () {
    this.loading = true
    await UserGetMatchingListApi.getInstance.sendAsync(undefined, 1)
    this.loading = false
  }
}
</script>
