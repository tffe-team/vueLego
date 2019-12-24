<template>
  <div id="noFound" class="rui-flex">
    <header class="rui-header rui-header-vue-lego">
      <router-link class="rui-ico back" tag="i" to="/">&#xe902;</router-link>
      <h2 class="title">{{title}}</h2>
   </header>
   <div class="flex bd">
      <div class="btn-box">
        <div class="rui-btn g-btn" @click="loading">常规loading</div>
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
  jumpUrl() {
    this.$router.go(-1)
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
