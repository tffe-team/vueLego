<template>
  <div class="r-vue-lego-loading vue-lego-loading vue-lego-loading-common" v-show='visible'>
    <div class="inner">
        <i class="rui-ico"></i>
        <p class="tips">{{tips || $translate('loading')}}</p>
    </div>
  </div>
</template>
<script>
import locale from '../../mixins/locale'
export default{
  name : 'Loading',
  mixins: [locale],
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    tips: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>