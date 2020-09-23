<template>
<div>
    <!--<div>
        <div class="selection">
            <sxd-inputpro @focus="showSuggestions=true" @blur="showSuggestions=false"/>
        </div>
        <div v-if="showSuggestions" class="dropdown">
            <ul>
                <slot/>
            </ul> 
        </div>
    </div>-->

    <h1>123</h1>
    <ren data="123" placeholder="请输入" @click="a">
      <div slot="name1"><slot></slot></div>
    </ren>
</div>
</template>
<script>
import ren from './render.vue';
  export default {
    name: 'SxdSelect',
    components: {ren},
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
      a(){
        console.log(1)
      }
    }
  };
</script>