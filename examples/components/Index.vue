<template>
  <div id="noFound" class="rui-flex">
    <header class="rui-header rui-header-bank-card">
      <h2 class="title">{{title}}</h2>
   </header>
   <div class="flex bd">
      <ul class="rui-list">
        <li class="item  title" >
          <div class="label flex">基础组件</div>
        </li>
        <router-link tag="li" class="item" to="/buttons">
          <div class="label flex">Button按钮</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </router-link>
        <li class="item title">
          <div class="label flex">反馈组件</div>
        </li>
        <router-link tag="li" class="item" to="/dialog">
          <div class="label flex">Dialog弹层</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </router-link>
       <router-link tag="li" class="item" to="/tips">
          <div class="label flex">Tips弱提醒</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </router-link>
        <router-link tag="li" class="item" to="/totast">
          <div class="label flex">Totast通知</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </router-link>
        <!-- <li class="item title" @click="successDialog">
          <div class="label flex">表单组件</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li> -->
      </ul>
   </div>
 </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import {Action, Getter} from 'vuex-class'
@Component
export default class Welcome extends Vue {
  title = 'rui-vue-lego'
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
  loading() {
    this.$loading.show()
    setTimeout(() => {
      this.$loading.hide()
    }, 1000)
  }
  failTips() {
    this.$toast.fail({
      msg: '失败'
    })
  }
  sucessTips() {
    this.$toast.success({
      msg: '成功'
    })
  }
  tips() {
    this.$toast({
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
