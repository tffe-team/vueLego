<template>
  <div id="noFound" class="rui-flex">
   <header class="rui-header rui-header-loan">
      <span class="back" @click="jumpUrl">
            <i class="rui-ico">&#xe902;</i>
        </span>
      <h2 class="title">Dialog</h2>
    </header> 
   <div class="flex bd">
      <ul class="rui-list">
        <li class="item title">
           <div class="label flex">弹层</div>
        </li>
        <li class="item" @click="errorDialog">
          <div class="label flex">错误弹层</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
        <li class="item" @click="successDialog">
          <div class="label flex">成功弹层</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
        <li class="item" @click="infoDialog">
          <div class="label flex">提示弹层</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
         <li class="item" @click="confirmDialog">
          <div class="label flex">确认弹层</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
      </ul>
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
     this.$dialog.error({
      content: '出错了',
      okText: '我知道了',
      onOk: function () {
        console.log('失败窗口')
      }
    })
  }
  successDialog() {
     this.$dialog.success({
      content: '成功了成功了成功了',
      okText: '成功了',
      onOk: function () {
        console.log('成功窗口')
      }
    })
  }
  infoDialog() {
     this.$dialog.info({
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
    .title{
      font-weight: 800;
      padding: .1rem 0;
      color: #4f8cf0;
    }
  }
</style>
