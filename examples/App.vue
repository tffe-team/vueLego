<template>
  <div id="app" class="wrap">
    <header class="rui-header rui-header-vue-lego">
      <i class="rui-ico back" v-if="this.title !== 'rui-vue-lego'" @click="jumpUrl">&#xe902;</i>
      <h2 class="title">{{title}}</h2>
    </header> 
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
import {Component, Vue, Prop, Watch} from 'vue-property-decorator'
@Component
export default class App extends Vue {
  transitionName  = 'slide-right'
  title = ''
  @Watch('$route')
  onRouterChange(to: any, from: any) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    this.title = this.$route.name
  }
  jumpUrl() {
    this.$router.go(-1)
  }
}
</script>

<style lang="scss">
@import '../src/styles/';
@import 'common/css/app';
@import 'common/css/global';
.wrap{
  height: 100%;
}
.bd{
  padding: .2rem;
  .vue-lego-btn{
    margin: .1rem .1rem 0 0;
  }
}
.child-view {
  position: absolute;
  height: 100%;
  width: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.fadeInUp-enter-active, .fadeInUp-leave-active {
  opacity: 1;
  transform: none;
  transition: transform .5s
}
.fadeInUp-enter, .fadeInUp-leave-to {
   opacity: 0;
  transform: translate3d(0, 100%, 0);
}

.fadeInRight-enter-active, .fadeInRight-leave-active {
    opacity: 1;
    transform: none;
    transition: transform .5s
}
.fadeInRight-enter, .fadeInRight-leave-to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
}
</style>
