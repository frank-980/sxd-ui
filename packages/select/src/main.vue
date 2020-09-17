<template>
<div @S="onOptionClick">
    <div>
        <div class="selection">
            <sxd-inputpro @focus="showSuggestions=true" />
        </div>
        <div v-if="showSuggestions" class="dropdown">
            <!--<ul>
                <li>无数据</li>
            </ul>-->
            <ul>
                <slot/>
            </ul> 
        </div>
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
        showSuggestions:false,
      }
      
    },
    mounted(){
      //this.$on('S', this.onOptionClick);
    },
    methods:{
      onOptionClick(opt){
        console.log(0)
        console.log(opt)
      }
    }
  };
</script>