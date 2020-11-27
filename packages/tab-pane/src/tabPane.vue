<template>
    <div v-if="active" ref="barparent">
     
        <slot/>
    </div>
</template>
<script>
export default {
  name: 'SxdTabPane',

  props:{
    label:{},
    name:{}
  },
  data(){
    return {
    }
  },
  updated() {
    this.$parent.$emit('tab-nav-update');
  },
  mounted(){
  },
  methods:{
      
  },
  computed:{
      active(){
        let parName = this.$parent.currentName
        return parName==this.name
      }
  }
}
</script>  
<style scoped>

</style>