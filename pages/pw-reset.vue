<template>
  <div>
    <p>
      パスワードをお忘れの場合は、ご登録のメールアドレス宛にパスワード再設定用のリンクをお送りします。
      あらかじめ、[domain name]からのメールが受信できるようにメールソフトの設定をご確認ください。
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'notLogin'
})
export default class extends Vue {
}
</script>
