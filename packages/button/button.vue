<template>
  <button :class="classes" :disabled="disabled" @click="tapButton">
    <div v-if="loading" class="loading-container">
      <div class="loading-wheel"></div>
    </div>
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
    disabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: 'normal'
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
      const baseClass = 'r-vue-lego-button'
      const classPrefix = 'rui-btn'
      return [
        baseClass,
        classPrefix,
        `${classPrefix}-${this.type}`,
        {
          [`${classPrefix}-long`]: this.long,
          [`${classPrefix}-loading`]: this.loading,
          [`${classPrefix}-disabled`]: this.disabled,
          [`${classPrefix}-${this.size}`]: this.size !== 'normal',
          [`${classPrefix}-${this.shape}`]: this.shape !== 'normal',
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

<style lang="scss" scoped>
.r-vue-lego-button {
  &::after {
    box-sizing: border-box; // FIXME:
  }
}
</style>
