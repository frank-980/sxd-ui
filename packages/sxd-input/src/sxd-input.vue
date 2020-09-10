<template>
<div class="sxd-input">
  <input 
  v-if="type!='textarea'"
  :class="is_focus?'sxd-ip keepFocus':'sxd-ip'"  
  :value="value"
  :type="type"
  :disabled="disabled"
  @focus="onFocus" 
  @blur="onBlur" 
  @input="handleInput" 
  />
  <textarea 
  v-else
  :class="is_focus?'sxd-textarea keepFocus':'sxd-textarea'"  
  :value="value"
  :disabled="disabled"
  @focus="onFocus" 
  @blur="onBlur" 
  @input="handleInput" 
  ></textarea>
  <label class="sxd-lab">{{label}}</label>
  <span class="focus-border"></span>
</div>
</template>

<script>
import '../../../public/css/index.css'
export default {
  name: 'SxdInput', 
  props:{
    label:{
      type:String,
      default:"请输入",
      required:false,
    },
    value:{
      type:String,
      default:"",
    },
    disabled:{
      type:Boolean,
      default:false
    },
    type:{
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
       is_focus:false,
       color:"#7763e9,#9d69ef,#ce73f2,#ec75f7"
    }
  },
  methods: {
    onFocus () {
      this.is_focus=true
      console.log(this.value)
    },
    onBlur(){
      if(this.value==''){
        this.is_focus=false
      }
    },
    handleInput(event) {
      console.log(event)
      this.$emit('input', event.target.value)
    },
  }
}
</script>

<style scoped>
</style>