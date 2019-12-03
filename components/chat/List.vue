<template>
  <v-container>
    <span v-if="userList">
      マッチしているユーザーはいません
    </span>
    <v-row>
      <v-data-table>
        <!-- <template v-slot:body="{ items }">

        </template> -->
      </v-data-table>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
}
</script>
