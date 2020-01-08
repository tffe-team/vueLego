<template>
  <div class="m-vue-lego-tips rui-flex">
   <div class="flex bd">
      <h3 class="g-title">文字提醒</h3>
      <div class="btn-box">
        <r-button type="primary" @click="shortTips">文字提醒</r-button>
        <r-button type="primary" @click="longTips">长文字提醒</r-button>
      </div>
      <h3 class="g-title">成功／失败</h3>
      <div class="btn-box">
        <r-button type="success" @click="successTips">成功</r-button>
        <r-button type="ghost" @click="errorTips">失败</r-button>
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
