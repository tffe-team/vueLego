<template>
  <transition name="slide">
    <div class="r-vue-lego-toast" v-show="visible">
      <div :class="['toast-content', `toast-content--${type}`]">
      <span class="message">
        <slot></slot>
      </span>
      </div>
    </div>
  </transition>
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
          return ['info', 'success', 'error'].indexOf(value) !== -1
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
          this.$emit('on-close')
        }
      }
    },
  }
</script>

<style lang="scss">
  $toast-info-bgColor: #508CF0;
  $toast-success-bgColor: #42C905;
  $toast-error-bgColor: #fa5d5d;

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  .slide-enter-active {
    animation: slide-down .3s;
  }

  .slide-leave-active {
    animation: slide-down .3s reverse;
  }

  .r-vue-lego-toast {
    width: 100%;
    top: 0;
    position: fixed;
    z-index: 1000;

    .toast-content {
      padding: .08rem .16rem;
      text-align: center;
      animation: slide-down 300ms;

      &--info {
        background-color: $toast-info-bgColor;
      }

      &--success {
        background-color: $toast-success-bgColor;
      }

      &--error {
        background-color: $toast-error-bgColor;
      }

      .message {
        display: inline-block;
        color: #fff;
        text-align: left;
      }
    }
  }
</style>
