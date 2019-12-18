<template>
  <div id="noFound" class="rui-flex">
    <header class="rui-header rui-header-bank-card">
      <h2 class="title">{{title}}</h2>
   </header>
   <div class="flex bd">
      <ul class="rui-list">
        <li class="item title">
          <div class="label flex">提醒弹层</div>
        </li>
        <li class="item" @click="tips">
          <div class="label flex">常规提醒弹层</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
        <li class="item" @click="failTips">
          <div class="label flex">失败醒弹层</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
        <li class="item" @click="sucessTips">
          <div class="label flex">成功提醒弹层</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
      </ul>
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
  failTips() {
    this.$tips.fail({
      msg: '失败'
    })
  }
  sucessTips() {
    this.$tips.success({
      msg: '成功'
    })
  }
  tips() {
    this.$tips({
      msg: '测试'
    })
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
