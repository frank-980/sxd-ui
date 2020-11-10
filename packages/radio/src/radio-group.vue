<template>
    <div >
        <slot/>
    </div>
</template>
<script>
export default {
  name: 'SxdRadioGroup', 
  componentName: 'SxdRadioGroup',
  props:{
    value:{},
    size:{
      type:String,
    },
    disabled:Boolean,
  },
  mounted(){
    this.$on('handlechange', function (val) {
      this.$emit('change',val)
    })
  },
  computed:{
    radio_size(){
      return this.size
    }
  }
}
</script>  
<style scoped>

</style>