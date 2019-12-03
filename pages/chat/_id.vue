<template>
  <p>_id</p>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { UserGetApi } from '@/models/class/api/user'

@Component({
  asyncData: async (context) => {
    const id = context.params.id
    console.log('id=' + id)
    const response = await UserGetApi.getInstance.sendAsync(undefined, null)
    return {
      response
    }
  }
})
export default class extends Vue {
}
</script>
