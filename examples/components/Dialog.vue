<template>
  <div id="wrap" class="rui-flex">
    <header class="rui-header">
         <h2 class="title">{{title}}</h2>
   </header>
   <div class="flex">
   </div>
 </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component
export default class Dialog extends Vue {
  title = "dialog组件"
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
</style>