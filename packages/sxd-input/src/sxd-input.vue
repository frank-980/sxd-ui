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
:focus{outline: none;}
.sxd-input{
   position: relative;
   width:200px;
   display: inline-block;
}
.sxd-input .sxd-textarea{
  outline: 1px solid black;
  font-size:16px;
  padding: 7px 0;
  width:100%;
  background-color: transparent;
}
.sxd-input .sxd-ip{
  font-size:16px;
  padding: 7px 0;
  width:100%;
  background-color: transparent;
  border:0;
  position: relative;
  border-bottom:1px solid gray;
}
.sxd-input .sxd-ip:disabled{
  background-color: #f5f5f5;
  cursor: not-allowed;
  border-bottom:1px solid #ccc;
}
.sxd-input .sxd-lab{
  font-size:16px;
  width:100%;
  text-align: left;
  position: absolute;
  top:9px;
  left:0;
  z-index:-1;
  transition:.4s;
  color:#aaa;
}
.sxd-input .focus-border{
  position: absolute;
  bottom:0;
  left:0;
  width:0;
  z-index:99;
  height:2px;
  background-color: #7763e9;
  transition: .4s;
}
.sxd-ip:focus ~ .sxd-lab, .keepFocus ~ .sxd-lab{
  top:-16px;
	font-size:12px;
	color:#7763e9
}
.sxd-ip:focus ~ .focus-border, .keepFocus ~ .focus-border{
  width:100%
}
</style>