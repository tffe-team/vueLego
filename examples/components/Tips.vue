<template>
  <div class="m-vue-lego-tips rui-flex">
    <header class="rui-header rui-header-vue-lego">
      <router-link class="rui-ico back" tag="i" to="/">&#xe902;</router-link>
      <h2 class="title">{{title}}</h2>
   </header>
   <div class="flex bd">
      <h3 class="g-title">文字提醒</h3>
      <div class="btn-box">
        <div class="rui-btn g-btn" @click="shortTips">文字提醒</div>
        <div class="rui-btn g-btn" @click="longTips">长文字提醒</div>
      </div>
      <h3 class="title">成功／失败</h3>
      <div class="btn-box">
        <div class="rui-btn g-btn g-success-btn" @click="successTips">成功</div>
        <div class="rui-btn g-btn g-error-btn" @click="errorTips">失败</div>
      </div>
   </div>
 </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
@Component
export default class Tips extends Vue {
  title = '列表页'
  list: Array<any> = []
  mounted() {
  }
  jumpUrl() {
    this.$router.go(-1)
  }
  shortTips() {
    this.$tips.info({
      message: '测试文案'
    })
  }
  longTips() {
    this.$tips.info({
      message: '测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案'
    })
  }
  successTips() {
    this.$tips.success({
      message: '成功'
    })
  }
  errorTips() {
    this.$tips.error({
      message: '失败'
    })
  }
}
</script>
<style lang="scss" scoped>
 .m-vue-lego-tips{
   .bd{
      padding: .2rem;
   }
 }
</style>
