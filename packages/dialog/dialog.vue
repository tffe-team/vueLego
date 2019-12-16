<template>
  <div class="rui-masker vue-lego-dialog" v-show="visible">
    <div class="rui-dialog" >
      <header class="hd" v-if="title">
        <h2 class="title">
          {{title}}
        </h2>
        <span v-if="closeable" @click="close" class="">关闭</span>
      </header>
      <div class="bd">
        <h2 class="icon-wrap" v-if="iconName !== ''">
            <i v-if="iconName === 'info'" class="rui-ico circle-bg info">&#xe90b;</i>
            <i v-if="iconName === 'success'" class="rui-ico circle-bg sucess">&#xe90a;</i>
            <i v-if="iconName === 'error'" class="rui-ico circle-bg">&#xe90b;</i>
        </h2>
        <div>{{content}}</div>
        <slot></slot> 
      </div>
      <footer class="ft" v-if='!footerHide'>
        <button class="rui-btn  rui-btn-dialog" v-if="showCancel" @click='cancle'>{{cancelText}}</button>
        <button class="rui-btn  rui-btn-dialog" @click='ok'>{{okText}}</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'r-dialog',
  props: {
    iconName:  {
      type: String,
      default: ''
    },
    closeable:  {
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
      this.$emit('on-cancel');
    },
    cancle() {
      this.close()
    },
    ok() {
      this.visible = false;
      this.$emit('input', false);
      this.$emit('on-ok')
    }
  }
}
</script>
