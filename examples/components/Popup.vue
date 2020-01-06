<template>
  <div class="m-vue-lego-popup rui-flex">
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
        <div class="rui-btn g-btn" @click="onCloseEventClick">自定义关闭回调</div>
      </div>
      <!-- <r-popup title="测试日期" ></r-popup> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'popup',
    methods: {
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
