<template>
  <div :class="['r-vue-lego-dialog', `r-vue-lego-${$LEGO.theme}-dialog`]" v-show="visible">
    <div class="vue-lego-masker " v-if="showMask"></div>
    <div class="vue-lego-dialog" >
      <header class="hd" v-if="title">
        <h2 class="title">
          {{title}}
        </h2>
        <span v-if="closeAble" @click="close" class="close-btn vue-lego-ico">&#xe90c;</span>
      </header>
      <div class="bd">
        <h2 class="icon-wrap" v-if="iconName !== ''">
            <i v-if="iconName === 'info'" class="vue-lego-ico circle-bg info">&#xe90b;</i>
            <i v-if="iconName === 'success'" class="vue-lego-ico circle-bg sucess">&#xe90a;</i>
            <i v-if="iconName === 'error'" class="vue-lego-ico circle-bg">&#xe90b;</i>
        </h2>
        <contentRender v-if="render" :render="render" />
        <div v-else>{{content}}</div>
      </div>
      <footer class="ft" v-if='!footerHide'>
        <button class="vue-lego-btn  vue-lego-btn-dialog" v-if="showCancel" @click='cancle'>{{cancelText}}</button>
        <button class="vue-lego-btn  vue-lego-btn-dialog" @click='ok'>{{okText}}</button>
      </footer>
    </div>
  </div>
  
</template>
<script>

import contentRender from './contentRender'
export default {
  name: 'r-dialog',
  props: {
    iconName:  {
      type: String,
      default: ''
    },
    showMask:  {
      type: Boolean,
      default: true
    },
    closeAble:  {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    title : {
      type : String,
      default: ''
    },
    content: {
      type : String,
      default: ''
    },
    okText: {
      type : String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    footerHide: {
      type: Boolean,
      default: false
    },
    render: {
      type: Function
    }
  },
  components: {
    contentRender
  },
  data () {
    return {
      visible : this.value
    }
  },
  mounted() {
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('input', false);
      this.$emit('on-close');
    },
    cancle() {
      this.visible = false;
      this.$emit('input', false);
      this.$emit('on-cancel');
    },
    ok() {
      this.visible = false;
      this.$emit('input', false);
      this.$emit('on-ok')
    }
  }
}
</script>
