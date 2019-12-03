<template>
  <div>
    <input
      type="text"
      id="email"
      v-model="user.email"
      placeholder="email"
    />
    <input
      type="text"
      id="password"
      v-model="user.password"
      placeholder="password"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { User } from '@/models/interface/User'

@Component
export default class extends Vue {
  @Prop()
  user!: User
}

</script>
