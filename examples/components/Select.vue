<template>

<div>
    <sxd-select>
        <sxd-select-options label="宝山区" value="宝山区"></sxd-select-options>
        <sxd-select-options label="普陀区" value="普陀区"></sxd-select-options>
    </sxd-select>
</div>
</template>
<script>
  export default {
    props: {
      
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