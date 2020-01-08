<template>
  <div class="rui-flex">
    <div class="bd flex">
      <p class="g-title">按钮类型</p>
      <div class="btns-wrap">
        <r-button type="primary">primary</r-button>
        <r-button type="success">success</r-button>
        <r-button type="ghost">ghost</r-button>
      </div>
      <p class="g-title">禁用按钮</p>
      <div class="btns-wrap">
        <r-button disabled type="primary">primary</r-button>
        <r-button disabled type="success">success</r-button>
        <r-button disabled type="ghost">ghost</r-button>
      </div>
      <p class="g-title">形状按钮</p>
      <div class="btns-wrap">
        <r-button shape="round" type="primary">椭圆按钮</r-button>
        <r-button shape="round" type="ghost">椭圆按钮</r-button>
      </div>
      <p class="g-title">按钮尺寸</p>
      <div class="btns-wrap">
        <r-button size="large">large按钮</r-button>
        <r-button>normal按钮</r-button>
        <r-button size="small">small</r-button>
      </div>
      <p class="g-title">块状按钮</p>
      <div class="btns-wrap">
        <r-button long>long按钮</r-button>
      </div>
      <p class="g-title">加载状态</p>
      <div class="btns-wrap">
        <r-button loading>加载状态</r-button>
      </div>
      <p class="g-title">路由跳转</p>
      <div class="btns-wrap">
        <r-button url="https://www.baidu.com">url跳转</r-button>
        <r-button to="/">router跳转</r-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
@Component
export default class Buttons extends Vue {
  jumpUrl() {
    this.$router.push('/')
  }

  clickBtn() {
    alert('点击了按钮')
  }
}
</script>

<style lang="scss" scoped>
  .flex{
    background-color: #fff;
  }
  .bd{
    padding-bottom: .4rem;
  }
  .flex{
    background-color: #fff;
  }
  .bd{
    .btns-wrap {
      margin: .1rem 0 .2rem 0;
      > button {
        margin-top: 10px;
      }
    }
  }
</style>