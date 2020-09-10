<template>
  <div id="app">
    <sxd-input label="sxd" v-model="inputVal"></sxd-input>
    VALUE: {{inputVal}}
    <sxd-button type="primary" @click="btn">1</sxd-button>
    <sxd-button type="danger" disabled>2</sxd-button>
    <sxd-button type="success" icon="sxd-index1">3</sxd-button>
    <sxd-button type="primary" icon="sxd-index1" :loading="is_loading">加载中</sxd-button>
    <sxd-input label="sxd" v-model="inputVal"></sxd-input>
    <sxd-input label="sxd" v-model="inputVal"></sxd-input>
    <sxd-input label="sxd" v-model="inputVal"></sxd-input>
    <sxd-input label="sxd" v-model="inputVal"></sxd-input>
    <sxd-input label="sxd" v-model="inputVal"></sxd-input>
    <sxd-input label="sxd" v-model="inputVal"></sxd-input>
    <sxd-input label="sxd" v-model="inputVal"></sxd-input>
    <Block-code title="INPUT" :code="code"></Block-code>
    <sxd-table :data="tableData">
      
        <sxd-tablecol colName="姓名" prop="name"></sxd-tablecol>
        <sxd-tablecol colName="年龄" prop="age"></sxd-tablecol>
        <sxd-tablecol colName="时间" prop="time"></sxd-tablecol>
      
    </sxd-table>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
       inputVal:"",
       is_loading:true,
       tableData:[
            {
                name:'sxdddddddddddddddd',
                age:25,
                time:"2020"
            },
            {
                name:'sxd2',
                age:22,
                time:"2022"
            },
        ],
       code:{
           html:`
    <div>
        <h1>123</h1>
    </div>
           `,
           javascript:`
    const b = 1234
    function a(){
        alert(1)
    }
            `
       }
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
