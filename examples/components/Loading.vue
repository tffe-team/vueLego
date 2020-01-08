<template>
  <div class="rui-flex">
   <div class="flex bd">
      <div class="btn-box">
        <r-button type="primary"  @click="loading">常规loading</r-button>
      </div>
   </div>
 </div>
</template>

<script lang="ts">

import {Component, Vue, Prop} from 'vue-property-decorator'
@Component
export default class Loading extends Vue {
  title = 'loading'
  list: Array<any> = []
  mounted() {
  }
  loading() {
     this.$loading.show()
    setTimeout(() => {
      this.$loading.hide()
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
</style>
