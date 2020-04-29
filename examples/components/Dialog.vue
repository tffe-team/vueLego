<template>
  <div  class="rui-flex">
   <div class="flex bd">
      <h3 class="g-title">提醒弹窗</h3>
      <div class="btn-box">
        <r-button type="primary"  @click="infoDialog(1)">有title</r-button>
        <r-button type="primary"  @click="infoDialog(0)">有无title</r-button>
      </div>
      <h3 class="g-title">确认弹窗</h3>
      <div class="btn-box">
        <r-button type="primary"  @click="confirmDialog">确认弹窗</r-button>
        <r-button type="primary"  @click="renderDialog">自定义内容</r-button>
      </div>
      <h3 class="g-title">反馈弹窗</h3>
      <div class="btn-box">
        <r-button type="success"  @click="successDialog">成功</r-button>
        <r-button type="ghost"  @click="errorDialog">失败</r-button>
      </div>
   </div>
 </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
@Component
export default class Dialog extends Vue {
  title = 'Dialog'
  list: Array<any> = []
  mounted() {
  }
  errorDialog() {
     this.$dialog.fail({
      closeAble: true,
      content: '出错了',
      okText: '我知道了',
      onOk: function () {
        console.log('失败窗口')
      }
    })
  }
  successDialog() {
     this.$dialog.success({
      closeAble: true,
      content: '成功了成功了成功了',
      showMask: false,
      okText: '成功了',
      onOk: function () {
        console.log('成功窗口')
      }
    })
  }
  infoDialog(type: number) {
    let title = ''
    if(type) {
      title = '提醒弹窗'
    }
    this.$dialog.info({
      closeAble: true,
      title: title,
      content: '提示信息',
      okText: '确定',
      onOk: function () {
        console.log('提示窗口')
      }
    })
  }
  confirmDialog() {
     this.$dialog.confirm({
      title: '确定弹层',
      content: '内容没有保存，确定退出吗？',
      okText: '确定',
      onOk: function () {
        console.log('确认窗口')
      }
    })
  }
  renderDialog() {
    this.$dialog.confirm({
      title: 'render弹层',
      render: function (h) {
        return h('div', {
          class: ['render-wrap'],
          style: {
            height: '40px',
            maxHeight: '150px',
            overflow: 'scroll'
          }
        },[
          h('strong', 'render内容展示：render会覆盖content参数传递的文本值')
        ], 'asda')
      },   
      onOk:  () => {
        this.confirmDialog()
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .flex{
    background-color: #fff;
  }
</style>
