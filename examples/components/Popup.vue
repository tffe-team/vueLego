<template>
  <div class="m-vue-lego-popup rui-flex">
    <div class="flex bd">
       <h3 class="g-title">基础用法</h3>
      <div class="btn-box">
        <r-button type="primary" @click="left">从左往右</r-button>
        <r-button type="success" @click="right">从右往左</r-button>
        <r-button type="ghost" @click="up">从上往下</r-button>
        <r-button type="primary" @click="down">从下往上</r-button>
        <r-button type="ghost" @click="center">中间</r-button>
      </div>
    </div>
    <r-popup 
     v-model="show"
     :closeAble="closeAble"
     :position="position"
     className="test"
    > <p>cheese哈哈哈</p></r-popup>
  </div>
</template>

<script>
  export default {
    name: 'popup',
    data() {
      return {
        show: false,
        closeAble: false,
        position: ''
      }
    },
    methods: {
      left() {
        this.show = true
        this.position = 'left'
        this.closeAble = true
      },
      right() {
        this.show = true
        this.position = 'right'
        this.closeAble = false
      },
      down() {
        this.show = true
        this.position = 'down'
        this.closeAble = false
      },
      up() {
        this.show = true
        this.position = 'up'
        this.closeAble = true
      },
      center() {
        this.show = true
        this.position = 'center'
        this.closeAble = true
      }
    }
  };
</script>

