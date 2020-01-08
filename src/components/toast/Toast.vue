<template>
  <div class="r-vue-lego-toast vue-lego-slide-in-down" v-show="visible">
    <div :class="['toast-content', `toast-content--${type}`]">
      <span class="message">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'r-toast',
    props: {
      type: {
        type: String,
        required: true,
        default: 'info',
      },
      visible: {
        type: Boolean,
        required: true,
        default: false
      },
    },
    watch: {
      visible(val) {
        if (!val) {
          this.$destroy();
        }
      }
    }
  };
</script>
