<template>
  <div :class="['r-vue-lego-tips', 'rui-toast', 'rui-toast-vue-lego']" v-show="visible">
    <div class="icon-box" > 
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