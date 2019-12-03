<template>
  <v-btn
    :class="classes"
    :dark="dark"
    :color="btnColor"
    :loading="loading"
    @click="click"
  >
    <span>{{ text }}</span>
  </v-btn>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ default: '' })
  size!: string

  @Prop({ default: '' })
  color!: '' | 'red' | 'gray' | 'green' | 'blue' | 'orange'

  @Prop({ default: false })
  dark!: boolean

  @Prop({ default: '' })
  icon!: string

  @Prop({ default: '' })
  text!: string

  @Prop({ default: false })
  loading!: boolean

  get btnColor () {
    const colorPattarn = {
      '': '#B0BEC5',
      gray: '#B0BEC5',
      red: '#D50000',
      green: '#66BB6A',
      blue: '#0091EA',
      orange: ''
    }
    return colorPattarn[this.color]
  }

  get classes () {
    const size = this.size || 'm'
    return [size]
  }

  @Emit('click')
  click () {}
}
</script>
<style lang="sass" scoped>

</style>
