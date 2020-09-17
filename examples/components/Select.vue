<template>

<div>
    <sxd-select v-model="selectVal"> 
        <sxd-select-options label="宝山区" value="宝山区" @S="onOptionClick"></sxd-select-options>
        <sxd-select-options label="普陀区" value="普陀区"></sxd-select-options>
    </sxd-select>
    <h1>绑定值为:{{selectVal}}</h1>
</div>
</template>
<script>
  export default {
    props: {
      
    },
    data(){
      return{
        selectVal:''
      }
      
    },
    methods:{
     onOptionClick(opt){
        console.log(opt)
      }
    }
  };
</script>