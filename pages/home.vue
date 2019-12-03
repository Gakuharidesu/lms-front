<template>
  <v-container>
    <!-- <v-row no-gutters>
      <UserDetail />
    </v-row> -->
    <span v-touch:tap="log">Swipe Here</span>
    <div
      v-touch:swipe.left="swipeLeft"
      v-touch:swipe.right="swipeRight"
      class="test"
    >
      <v-row>
        <v-col>
          <p class="like" v-touch:tap="swipeLeft">dislike</p>
        </v-col>
        <v-col>
          <p class="dislike" v-touch:tap="swipeRight">like</p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  log () {
    console.log('log')
  }
  swipeLeft () {
    console.log('left')
  }
  swipeRight () {
    console.log('right')
  }
}
</script>
<style lang="sass" scoped>
.test
  background-color: #55acee
.like
  text-align: right
.dislike
  text-align: left
</style>
