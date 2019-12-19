<template>
  <button :class="classes" :disabled="disabled" @click="tapButton">
    <i v-if="loading" class="rui-ico">&#xe909;</i>
    <slot></slot>
  </button>
</template>


<script>
export default {
  name: 'r-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    classes () {
      const baseClass = 'rui-btn'
      const classPrefix = 'vue-lego-button'
      return [
        baseClass,
        classPrefix,
        `${classPrefix}-${this.type}`,
        {
          [`${classPrefix}-plain`]: this.plain,
          [`${classPrefix}-disabled`]: this.disabled,
          [`${classPrefix}-round`]: this.round,
          [`${classPrefix}-long`]: this.long,
          [`${classPrefix}-loading`]: this.loading,
          [`${classPrefix}-${this.size}`]: this.size !== 'normal',
        }
      ]
    }
  },
  methods: {
    tapButton(event) {
      this.$emit('click', event);
    }
  }
}
</script>
