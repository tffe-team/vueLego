<template>
  <div class="m-vue-lego-toast rui-flex">
    <div class="flex bd">
      <h3 class="g-title">基础用法</h3>
      <div class="btn-box">
        <div class="rui-btn g-btn g-success-btn" @click="onShortClick">单行文字</div>
        <div class="rui-btn g-btn g-success-btn" @click="onLongClick">多行文字</div>
      </div>
      <h3 class="g-title">通知类型</h3>
      <div class="btn-box">
        <div class="rui-btn g-btn g-success-btn" @click="onInfoClick">普通通知</div>
        <div class="rui-btn g-btn" @click="onSuccessClick">成功通知</div>
        <div class="rui-btn g-btn g-error-btn" @click="onErrorClick">错误通知</div>
      </div>
      <h3 class="g-title">自定义配置</h3>
      <div class="btn-box">
        <div class="rui-btn g-btn" @click="onDurationClick">自定义关闭时长</div>
        <div class="rui-btn g-btn" @click="onCloseEventClick">自定义关闭回调</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    methods: {
      onShortClick() {
        this.$toast.info({
          message: '我是单行文字，我是居中对齐',
        });
      },

      onLongClick() {
        this.$toast.info({
          message: '我这里是非常长长长长长长长长长长长长长长长的多行文字，我是居左对齐',
        });
      },

      onInfoClick() {
        this.$toast.info({
          message: '我是普通通知',
        });
      },

      onSuccessClick() {
        this.$toast.success({
          message: '我是成功通知'
        });
      },

      onErrorClick() {
        this.$toast.error({
          message: '我是错误通知'
        });
      },

      onDurationClick() {
        this.$toast.success({
          message: '我在 5 秒后关闭',
          duration: 5000
        });
      },

      onCloseEventClick() {
        this.$toast.success({
          message: '我关闭后在控制台打印已经关闭了',
          onClose: () => {
            console.log('已经关闭了');
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .m-vue-lego-toast {
    .bd {
      padding: .2rem;
    }
  }
</style>
