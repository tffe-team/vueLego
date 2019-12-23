<template>
  <div class="rui-flex">
    <header class="rui-header rui-header-loan">
      <span class="back" @click="jumpUrl"><i class="rui-ico">&#xe902;</i></span>
      <h2 class="title">Button</h2>
    </header>
    <div class="bd flex">
      <ul class="rui-list">
        <li class="item title">按钮类型</li>
        <div class="btns-wrap">
          <r-button>default</r-button>
          <r-button type="primary">primary</r-button>
          <r-button type="success">success</r-button>
          <r-button type="primary-ghost">primary-ghost</r-button>
          <r-button type="success-ghost">success-ghost</r-button>
        </div>
        <li class="item title">禁用按钮</li>
        <div class="btns-wrap">
          <r-button disabled>default</r-button>
          <r-button disabled type="primary">primary</r-button>
          <r-button disabled type="success">success</r-button>
          <r-button disabled type="primary-ghost">primary-ghost</r-button>
          <r-button disabled type="success-ghost">success-ghost</r-button>
        </div>
        <li class="item title">形状按钮</li>
        <div class="btns-wrap">
          <r-button shape="round" type="primary">椭圆按钮</r-button>
          <r-button shape="round" type="success-ghost">椭圆按钮</r-button>
        </div>
        <li class="item title">按钮尺寸</li>
        <div class="btns-wrap">
          <r-button shape="round" size="large">large按钮</r-button>
          <r-button size="long">long按钮</r-button>
          <r-button type="primary" size="medium">medium按钮</r-button>
        </div>
        <li class="item title">加载状态</li>
        <div class="btns-wrap">
          <r-button type="primary-ghost" loading>加载状态</r-button>
        </div>
        <li class="item title">路由跳转</li>
        <div class="btns-wrap">
          <r-button type="primary-ghost" url="https://www.baidu.com">url跳转</r-button>
          <r-button type="success-ghost" to="/">router跳转</r-button>
        </div>
      </ul>
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
    overflow-y: scroll;
    .title{
      font-weight: 800;
      padding: .1rem 0 0 0;
      color: #4f8cf0;
    }
    .rui-list {
      margin-right: .1rem;
    }
    .btns-wrap {
      margin: .1rem 0 .2rem 0;
      > button {
        margin-top: 10px;
      }
    }
  }
</style>