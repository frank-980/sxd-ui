<template>
    <li class="select-dropdown" :value="value">{{label}}</li>
</template>
<script>
  export default {
    name: 'SxdSelectOptions',
    props: {
        label:{
            type:String,
            default:"",
        },
        value:{
            type:String,
            default:"",
        },
        disabled:{
            type:Boolean,
            default:false
        }
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
<style scoped>
    .select-dropdown{ 
        font-size: 14px;
        padding: 0 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #606266;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;
    }
</style>