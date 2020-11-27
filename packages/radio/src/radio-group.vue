<template>
    <div >
        <slot/>
    </div>
</template>
<script>
import Emiter from '~/mixins/Emiter.js'
export default {
  name: 'SxdRadioGroup', 
  mixins:[Emiter],
  componentName: 'SxdRadioGroup',
  props:{
    value:{}, 
    size:{
      type:String,
    },
    disabled:Boolean,
  },
  mounted(){
    /*if(this.value==""){
      this.dispatch("SxdFormItem","form.change")
    }*/
    this.$on('handlechange', function (val) {
      this.$emit('change',val)
    })
  },
  watch:{
    value(n){
      this.dispatch("SxdFormItem","form.change")
    }
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