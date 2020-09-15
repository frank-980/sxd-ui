<template>
<div>
    <div>
        <input />
        <ul>
            <slot />
        </ul>
    </div>
</div>
</template>
<script>
  export default {
    name: 'SxdSelect',
    props: {
      name: String
    },
    data(){
      return{
        sele:null
      }
      
    },
    methods:{
 
    }
  };
</script>