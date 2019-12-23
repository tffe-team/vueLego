<template>
  <div  class="rui-flex">
   <header class="rui-header rui-header-vue-lego">
      <i class="rui-ico back"  @click="jumpUrl">&#xe902;</i>
      <h2 class="title">Dialog</h2>
    </header> 
   <div class="flex bd">
      <h3 class="g-title">提醒弹窗</h3>
      <div class="btn-box">
        <div class="rui-btn g-btn" @click="infoDialog(1)">提醒有title</div>
        <div class="rui-btn g-btn" @click="infoDialog(0)">提醒有无title</div>
      </div>
      <h3 class="g-title">确认弹窗</h3>
      <div class="btn-box">
        <div class="rui-btn g-btn" @click="confirmDialog">确认弹窗</div>
        <div class="rui-btn g-btn" @click="renderDialog">自定义内容</div>
      </div>
      <h3 class="g-title">反馈弹窗</h3>
      <div class="btn-box">
        <div class="rui-btn g-btn g-success-btn" @click="successDialog">成功</div>
        <div class="rui-btn g-btn g-error-btn" @click="errorDialog">失败</div>
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
      content: '内容没有保存，确定退出吗？',
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
      okText: '确定',
      onOk:  () => {
        this.confirmDialog()
      }
    })
  }
  jumpUrl() {
    this.$router.go(-1)
  }
}
</script>
<style lang="scss" scoped>
  .flex{
    background-color: #fff;
  }
  .bd{
    padding: .2rem;
  }
</style>
