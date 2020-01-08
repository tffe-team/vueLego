<template>
  <div class="rui-flex">
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
        <router-link tag="li" class="item" to="/toast">
          <div class="label flex">Toast通知</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </router-link>
        <router-link tag="li" class="item" to="/loading">
          <div class="label flex">Loading</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </router-link>
         <li class="item title">
          <div class="label flex">业务组件</div>
        </li>
        <router-link tag="li" class="item" to="/popup">
          <div class="label flex">Popup</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </router-link>
        <router-link tag="li" class="item" to="/picker">
          <div class="label flex">Picker</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </router-link>
      </ul>
   </div>
 </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
@Component
export default class Demo extends Vue {
  title = 'rui-vue-lego'
  mounted() {
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
      color: #404040;
      background-color: #fff;
      .label{
        font-size: .18rem;
        background-color: #fff;
      }
      &::after{
        border: 0;
      }
    }
  }
</style>
