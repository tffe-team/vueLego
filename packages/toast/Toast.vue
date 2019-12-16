<template>
  <div :class="['m-toast', 'rui-toast', 'rui-toast-common', {'rui-toast-hasIcon' : iconName !== ''}]" v-show="visible">
    <div class="icon-box" > 
      <i class="icon rui-ico" v-if="iconName==='success'">&#xe60b;</i>
      <i class="icon rui-ico" v-if="iconName==='fail'">&#xe90b;</i>
    </div>
    <div>{{msg}}</div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    iconName : {
      type : String,
      required: false
    },
    msg : {
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