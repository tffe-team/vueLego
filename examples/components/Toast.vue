<template>
  <div class="m-vue-lego-toast rui-flex">
    <div class="flex bd">
      <h3 class="g-title">基础用法</h3>
      <div class="btn-box">
        <r-button type="primary" @click="onShortClick">单行文字</r-button>
        <r-button type="primary" @click="onLongClick">多行文字</r-button>
      </div>
      <h3 class="g-title">通知类型</h3>
      <div class="btn-box">
        <r-button type="primary" @click="onInfoClick">普通通知</r-button>
        <r-button type="success" @click="onSuccessClick">成功通知</r-button>
        <r-button type="error" @click="onErrorClick">错误通知</r-button>
      </div>
      <h3 class="g-title">自定义配置</h3>
      <div class="btn-box">
        <r-button type="success" @click="onCloseEventClick">自定义关闭回调</r-button>
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
</style>
