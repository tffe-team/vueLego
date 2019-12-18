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
          <r-button>默认按钮</r-button>
          <r-button type="primary">主要按钮</r-button>
          <r-button type="success">成功按钮</r-button>
        </div>
        <li class="item title">朴素按钮</li>
        <div class="btns-wrap">
          <r-button plain>默认按钮</r-button>
          <r-button plain type="primary">主要按钮</r-button>
          <r-button plain type="success">成功按钮</r-button>
        </div>
        <li class="item title">禁用按钮</li>
        <div class="btns-wrap">
          <r-button disabled>默认按钮</r-button>
          <r-button disabled type="primary">主要按钮</r-button>
          <r-button disabled type="success">成功按钮</r-button>
          <r-button disabled plain type="primary">主要按钮</r-button>
          <r-button disabled plain type="success">成功按钮</r-button>
        </div>
        <li class="item title">圆角按钮</li>
        <div class="btns-wrap">
          <r-button round>默认按钮</r-button>
          <r-button round type="primary">主要按钮</r-button>
          <r-button round type="success">成功按钮</r-button>
          <r-button round plain type="primary">主要按钮</r-button>
          <r-button round plain type="success">成功按钮</r-button>
        </div>
        <li class="item title">长按钮</li>
        <div class="btns-wrap">
          <r-button long>默认按钮</r-button>
          <r-button long type="primary">主要按钮</r-button>
          <r-button long type="success">成功按钮</r-button>
          <r-button long plain type="primary">主要按钮</r-button>
          <r-button long plain type="success">成功按钮</r-button>
          <r-button long plain round type="success">成功按钮</r-button>
        </div>
        <li class="item title">加载状态</li>
        <div class="btns-wrap">
          <r-button loading long>加载状态</r-button>
        </div>
        <li class="item title">按钮尺寸</li>
        <div class="btns-wrap">
          <r-button size="large">large按钮</r-button>
          <r-button size="medium">medium按钮</r-button>
          <r-button type="primary" plain round size="medium">medium按钮</r-button>
        </div>
        <li class="item title">事件绑定</li>
        <div class="btns-wrap">
          <r-button @click="clickBtn" size="medium">medium按钮</r-button>
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