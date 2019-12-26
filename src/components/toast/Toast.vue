<template>
  <div class="r-vue-lego-toast" v-show="visible">
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
        validator(value) {
          return ['info', 'success', 'error'].indexOf(value) !== -1;
        }
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
          this.$emit('on-close');
        }
      }
    },
  };
</script>
