<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
      <a href="">規約</a>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  fixed: boolean = false
  drawer: boolean = false
  clipped: boolean = false
  title: string = 'LMS'
}
</script>
