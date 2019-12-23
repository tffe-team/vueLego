<template>
  <div :class="['r-vue-lego-tips', iconName ? 'vue-lego-tips-icon' : '']" v-show="visible">
    <div class="icon-box" v-if="iconName"> 
      <i class="rui-ico icon" v-if="iconName==='success'">&#xe60b;</i>
      <i class="rui-ico icon" v-if="iconName==='fail'">&#xe90b;</i>
    </div>
    <div class="message">{{message}}</div>
  </div>
</template>
<script>
export default {
  name: 'r-tips',
  props: {
    iconName : {
      type : String,
      required: false
    },
    message : {
      type : String,
      required: true
    }
  },
  data() {
    return {
      visible : this.value
    }
  }
}
</script>
<style lang="scss" scoped>
.r-vue-lego-tips{
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-width: 2rem;
  max-width: 72%;
  z-index: 9999;
  padding: 0.1rem;
  border-radius: 0.04rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  text-align: center;
  min-width: 1.5rem;
  .icon{
    font-size: .2rem;
  }
}
.vue-lego-tips-icon{
  min-width: 1rem;
}
</style>