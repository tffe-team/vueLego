<template>
  <div class="rui-flex">
    <div class="flex bd">
      <ul class="rui-list">
        <li class="item title">
          <div class="label flex">通知提示</div>
        </li>
        <li class="item" @click="onInfoClick">
          <div class="label flex">普通通知</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
        <li class="item" @click="onSuccessClick">
          <div class="label flex">成功通知</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
        <li class="item" @click="onErrorClick">
          <div class="label flex">错误通知</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
      </ul>
      <ul class="rui-list">
        <li class="item title">
          <div class="label flex">自定义通知</div>
        </li>
        <li class="item" @click="onDurationClick">
          <div class="label flex">自定义关闭时间</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
        <li class="item" @click="onCloseEventClick">
          <div class="label flex">自定义关闭后回调</div>
          <div class="label"><i class="rui-ico">&#xe904;</i></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    methods: {
      jumpUrl() {
        this.$router.go(-1)
      },

      onInfoClick() {
        this.$toast.info({
          message: '我是内容',
        })
      },

      onSuccessClick() {
        this.$toast.success({
          message: '我是成功内容'
        })
      },

      onErrorClick() {
        this.$toast.error({
          message: '我是错误内容'
        })
      },

      onDurationClick() {
        this.$toast.success({
          message: '我在 5 秒后关闭',
          duration: 5000
        })
      },

      onCloseEventClick() {
        this.$toast.error({
          message: '我关闭后在控制台打印已经关闭了',
          onClose: () => {
            console.log('已经关闭了')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flex {
    background-color: #fff;
  }

  .bd {
    .title {
      font-weight: 800;
      padding: .1rem 0;
      color: #4f8cf0;
    }
  }
</style>
