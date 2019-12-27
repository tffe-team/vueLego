<template>
    <div class="r-vue-lego-popup vue-lego-popup">
      <header class="hd vue-lego-header-popup">
        <span class="popup-regret">取消</span>
        <span class="popup-title">{{title}}</span>
        <span class="popup-affirm">确定</span>
      </header>
      <div class="bd">
        <div class="vue-lego-picker"><span class="mask"></span>
          <ul class="list">
            <li class="item">1</li>
            <li class="item">2</li>
            <li class="item">3</li>
            <li class="item">4</li>
            <li class="item">5</li>
            <li class="item">6</li>
            <li class="item">7</li>
          </ul>
           <ul class="list">
            <li class="item">1</li>
            <li class="item">2</li>
            <li class="item">3</li>
            <li class="item">4</li>
            <li class="item">5</li>
            <li class="item">6</li>
            <li class="item">7</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'r-popup',
    props: {
      title : {
        type : String,
        deafult: '选择数据',
        required: false
      }
    },
    methods: {
    }
  };
</script>
