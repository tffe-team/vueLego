(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{451:function(s,t,i){"use strict";i.r(t);var n=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"m-vue-lego-toast rui-flex"},[i("div",{staticClass:"flex bd"},[i("h3",{staticClass:"g-title"},[s._v("基础用法")]),s._v(" "),i("div",{staticClass:"btn-box"},[i("div",{staticClass:"rui-btn g-btn g-success-btn",on:{click:s.onShortClick}},[s._v("单行文字")]),s._v(" "),i("div",{staticClass:"rui-btn g-btn g-success-btn",on:{click:s.onLongClick}},[s._v("多行文字")])]),s._v(" "),i("h3",{staticClass:"g-title"},[s._v("通知类型")]),s._v(" "),i("div",{staticClass:"btn-box"},[i("div",{staticClass:"rui-btn g-btn g-success-btn",on:{click:s.onInfoClick}},[s._v("普通通知")]),s._v(" "),i("div",{staticClass:"rui-btn g-btn",on:{click:s.onSuccessClick}},[s._v("成功通知")]),s._v(" "),i("div",{staticClass:"rui-btn g-btn g-error-btn",on:{click:s.onErrorClick}},[s._v("错误通知")])]),s._v(" "),i("h3",{staticClass:"g-title"},[s._v("自定义配置")]),s._v(" "),i("div",{staticClass:"btn-box"},[i("div",{staticClass:"rui-btn g-btn",on:{click:s.onCloseEventClick}},[s._v("自定义关闭回调")])])])])};n._withStripped=!0;var c={name:"Toast",methods:{onShortClick(){this.$toast.info({message:"我是单行文字，我是居中对齐"})},onLongClick(){this.$toast.info({message:"我这里是非常长长长长长长长长长长长长长长长的多行文字，我是居左对齐"})},onInfoClick(){this.$toast.info({message:"我是普通通知"})},onSuccessClick(){this.$toast.success({message:"我是成功通知"})},onErrorClick(){this.$toast.error({message:"我是错误通知"})},onCloseEventClick(){this.$toast.success({message:"我关闭后在控制台打印已经关闭了",onClose:()=>{console.log("已经关闭了")}})}}},o=i(15),e=Object(o.a)(c,n,[],!1,null,"2e73cf36",null);e.options.__file="examples/components/Toast.vue",t.default=e.exports}}]);