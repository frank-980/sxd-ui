<template>
  <div id="app">
    <sxd-input label="sxd" v-model="inputVal"></sxd-input>
    VALUE: {{inputVal}}
    <sxd-button type="primary" @click="btn">1</sxd-button>
    <sxd-button type="danger" disabled>2</sxd-button>
    <sxd-button type="success" icon="sxd-index1">3</sxd-button>
    <sxd-button type="primary" icon="sxd-index1" :loading="is_loading">加载中</sxd-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
       inputVal:"",
       is_loading:true
    }
  },
  created(){
    setTimeout(()=>{
      this.is_loading=false
    },5000)
  },
  methods: {
    btn(){
      alert(1)
    }
  }
}
</script>

<style>

</style>
