<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">安装</p>

    <p>npm 安装</p>
    <pre style="margin:0" v-highlightjs="code.javascript"><code class="html"></code></pre>
    
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
    npm i sxd-ui -S
            `
       }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
