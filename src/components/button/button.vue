<template>
  <button :class="classes" :disabled="disabled" @click="tapButton">
    <div v-if="loading" class="loading-container">
      <i class="rui-ico">&#xe97b;</i>
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
      default: 'primary',
      validator (value) {
        return ['primary', 'ghost', 'success'].includes(value)
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
        return ['normal', 'large', 'small'].includes(value)
      }
    },
    long: {
      type: Boolean,
      default: false
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
      const basePrefix = 'vue-lego-btn'
      const classPrefix = `${basePrefix}-${this.$LEGO.theme}`
      return [
        basePrefix,
        `${classPrefix}-${this.type}`,
        {
          [`${basePrefix}-long`]: this.long,
          [`${basePrefix}-loading`]: this.loading,
          [`${basePrefix}-disabled`]: this.disabled,
          [`${basePrefix}-${this.size}`]: this.size !== 'normal',
          [`${basePrefix}-${this.shape}`]: this.shape !== 'normal',
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