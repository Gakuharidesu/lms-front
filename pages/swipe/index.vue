<template>
  <v-container>
    <v-row no-gutters>
      <UserDetail />
    </v-row>
    <v-row>
      <div
        v-touch:swipe.left="() => $router.push('left_page')"
        v-touch:swipe.right="() => $router.push('right_page')"
      >
        <p>test</p>
      </div>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import UserDetail from '@/components/swipe/UserDetail.vue'
import { SwipePostApi } from '@/models/class/api/swipe'
import { SwipeResult } from '@/models/interface/SwipeResult'

@Component({
  components: {
    UserDetail
  }
})
export default class extends Vue {
  swipeResult: SwipeResult = SwipeResult.empty()

  async register () {
    const response = await SwipePostApi.getInstance.sendAsync(
      this.swipeResult,
      null
    )
    if (response.status === 201) {
      this.show()
    }
  }

  async show () {
  }
}

</script>
