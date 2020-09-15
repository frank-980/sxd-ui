<template>
<!--<div>
  <select v-model="sele">
    <option value ="volvo">Volvo</option>
    <option value ="saab">Saab</option>
  </select>
  <button @click="sel">123</button>
</div>-->
<div>
    <div>
        <ul>
            <li>好几个</li>
            <li>海淀区</li>
            <li>宝山区</li>
        </ul>
    </div>
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