<template>
  <div class="content">
    <p class="h1">快速上手</p>

    <p class="h2">引入 SxdUi</p>
    <p class="h3">完整引入</p>
    <p class="h4">在 main.js 中写入以下内容：</p>
    <pre style="margin:0" v-highlightjs="code.javascript"><code class="html"></code></pre>
    <p>以上代码便完成了 sxd-ui 的引入。需要注意的是，样式文件需要单独引入。</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
       inputVal:"",
       is_loading:true,
       code:{
           javascript:`
    import Vue from 'vue'
    import SxdUi from 'element-ui'
    import "sxd-ui/lib/sxd-ui.css"
    import App from './App.vue'

    Vue.use(SxdUi)

    new Vue({
    el: '#app',
    render: h => h(App)
    })
            `
       }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.h1{
    margin:0;font-size:28px;font-weight:400;color:#1f2f3d
}
.h2{
    margin:55px 0 10px;font-size:22px
}
.h3{
    font-weight: 400;
    color: #1f2f3d;
    font-size:16px;
    margin:14px 0
}
.h4{
    font-size:14px;font-weight:400;color:#5e6d82
}
</style>
