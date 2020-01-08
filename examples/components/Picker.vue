<template>
  <div class="m-vue-lego-picker rui-flex">
    <div class="flex bd">
       <h3 class="g-title">基础用法</h3>
      <div class="btn-box">
        <div class="rui-btn g-btn g-success-btn" @click="showCloum">从左往右</div>
        <div class="rui-btn g-btn g-success-btn" @click="showCloums">多列文字</div>
      </div>
    </div>
    <r-picker title="单行列数据" v-if="showCloumPicker" 
    :columns='columns'
    @cancel="cancel"
    @confirm="confirm"
    @change="changeOne"
    ></r-picker>
    <r-picker title="单行列数据" v-if="showCloumsPicker" 
    :columns='columns'
    @cancel="cancel"
    @confirm="confirm"
    @change="changeSecond"
    ></r-picker>
  </div>
</template>

<script>
  export default {
    name: 'picker',
    data() {
      return {
        showCloumPicker: false,
        showCloumsPicker: false,
        columns: []
      }
    },
    methods: {
      showCloum() {
        this.showCloumPicker = true
        this.columns = [{
          value: 1,
          options: [
            {
              value: 1,
              title: '香蕉'
            },
            {
              value: 2,
              title: '苹果'
            },
             {
              value: 3,
              title: '黄瓜'
            },
            {
              value: 4,
              title: '梨子'
            },
            {
              value: 5,
              title: '橘子'
            },
            {
              value: 6,
              title: '榴莲'
            },
            {
              value: 6,
              title: '马铃薯'
            }
          ]
        }]
      },
      showCloums() {
        this.showCloumsPicker = true
        this.columns = [{
          value: 1,
          options: [
            {
              value: 1,
              title: '1'
            },
            {
              value: 2,
              title: '2'
            },
             {
              value: 3,
              title: '3'
            },
            {
              value: 4,
              title: '4'
            },
            {
              value: 5,
              title: '5'
            },
            {
              value: 6,
              title: '6'
            },
            {
              value: 7,
              title: '7'
            }
          ]
        },
        {
          value: 2,
          options: [
            {
              value: 1,
              title: '1'
            },
            {
              value: 2,
              title: '2'
            }
          ]
        }, {
          value: 1,
          options: [
            {
              value: 1,
              title: '1'
            },
            {
              value: 2,
              title: '2'
            }
          ]
        }]
      },
      confirm(value, index) {
        this.$tips.info({
          message: `values: [${value}], indexs: [${index}]`
        })
      },
      cancel() {
        this.showCloumPicker = false
        this.showCloumsPicker = false
      },
      changeOne(picker, value, index) {

      },
      changeSecond(picker, value, index) {
        if(index === 0) {
          picker.setColumnValues(1, {
            value: 2,
            options: [
              {
                value: 1,
                title: '1'
              },
              {
                value: 2,
                title: '2'
              },
              {
                value: 5,
                title: '5'
              }
            ]
          });
          picker.setColumnValues(2, {
            value: 1,
            options: [
              {
                value: 1,
                title: '1'
              },
              {
                value: 2,
                title: '333'
              },
              {
                value: 5,
                title: '3333'
              }
            ]
          });
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .m-vue-lego-popup {
    .bd {
      padding: .2rem;
    }
  }
</style>
