<template>
  <div id="noFound" class="rui-flex">
   <header class="rui-header rui-header-loan">
      <span class="back" @click="jumpUrl">
            <i class="rui-ico">&#xe902;</i>
        </span>
      <h2 class="title">Loading</h2>
    </header> 
   <div class="flex bd">
      <div class="rui-btn rui-btn-stacked rui-btn-login"  @click="loading">常规loading</div>
   </div>
 </div>
</template>

<script lang="ts">

import {Component, Vue, Prop} from 'vue-property-decorator'
@Component
export default class Loading extends Vue {
  title = '列表页'
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
  .flex{
    background-color: #fff;
  }
  .bd{
    .title{
      font-weight: 800;
      padding: .1rem 0;
      color: #4f8cf0;
    }
  }
</style>
