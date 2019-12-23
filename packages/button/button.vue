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
      default: 'default',
      validator (value) {
        return ['default', 'primary', 'primary-ghost', 'success-ghost', 'success'].includes(value)
      }
    },
    shape: {
      type: String,
      default: 'normal',
      validator (value) {
        return ['normal', 'round'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return ['normal', 'long', 'large', 'medium'].includes(value)
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    to: {
      type: [Object, String]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      const classPrefix = 'rui-btn'
      const baseClass = 'r-vue-lego-button'
      return [
        baseClass,
        `${classPrefix}-${this.type}`,
        {
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
      this.$emit('click', event)
      if(this.url) {
        event.preventDefault()
        window.location.href = this.url
        return
      }
      if (this.to) {
        event.preventDefault()
        const router = this.$router
        if (router) {
          this.replace ? this.$router.replace(this.to) : this.$router.push(this.to)
        } else {
          window.location.href = this.to
        }
        return
      }
    }
  }
}
</script>