<template>
<div>
  <select v-model="sele">
    <option value ="volvo">Volvo</option>
    <option value ="saab">Saab</option>
  </select>
  <button @click="sel">123</button>
</div>
</template>
<script>
  export default {
    name: 'select',
    props: {
      name: String
    },
    data(){
      return{
        sele:null
      }
      
    },
    methods:{
     sel(){
       console.log(this.sele)
     } 
    }
  };
</script>