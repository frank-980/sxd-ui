<template>
    <div 
    :class="['radio-button',
    {'is_checked':is_checked},
    {'is_disabled':is_disabled},
    button_size]" 
    @click="handleChange">
      <input class="radio_input" type="radio" :value="label" v-model="model"/>
      <span class="radio_text"><slot></slot></span>
    </div>
</template>
<script>
import Emiter from '~/mixins/Emiter.js'
export default {
  name: 'SxdRadioButton', 
  mixins:[Emiter],
  props:{
    label:{},
    value:{},
    disabled:Boolean,
  },
  data(){
    return {
      radioGroup:"",
    }
  },
  mounted(){
  },
  methods:{
    handleChange(){
      if(this.disabled){
        return
      }
      this.model=this.label
      if(!this.is_checked){
        this.$nextTick(() => {
          this.$emit('change',this.model)
           this.isGroup && this.dispatch('SxdRadioGroup','handlechange',this.model)
        })
      }
    },
  },
  computed:{
    is_disabled(){
      return this.disabled || this.radioGroup.disabled 
    },
    button_size(){
      let size = this.radioGroup.radio_size
      if(size=='medium'){
        return 'radio-button-medium'
      }else if(size=='small'){
        return 'radio-button-small'
      }else if(size=='mini'){
        return 'radio-button-mini'
      }else{
        return ''
      }
    },
    is_checked(){
      return this.label==this.model
    },
    isGroup(){
      let parent = this.$parent
      while(parent){
        if(parent.$options.componentName!=='SxdRadioGroup'){
          parent = parent.$parent
        }else{
          this.radioGroup = parent
          return true
        }
      }
      return false
    },
    model:{
      get(){
        return this.isGroup?this.radioGroup.value:this.value
      },
      set(val){
        if(this.isGroup){
          this.dispatch('SxdRadioGroup', 'input', [val]);
        }else{
          this.$emit('input',val);
        }
        
      },
    }
  }
}
</script>  
<style scoped>
.radio-button{
  cursor: pointer;
  display: inline-block;
  color:#606266;
  line-height: 1;
  position: relative;
}
.is_checked .radio_text{
  color: #fff;
    background-color: #7763e9;
    border-color: #7763e9;
    box-shadow: -1px 0 0 0 #7763e9;
}
.radio-button:first-child .radio_text{
    border-left: 1px solid #dcdfe6;
    border-radius: 4px 0 0 4px;
    box-shadow: none!important;
}
.radio-button:last-child .radio_text{
    border-radius: 0 4px 4px 0;
}
.is_disabled .radio_text{
  color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
    box-shadow: none;
}
.radio_text{
  line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #dcdfe6;
    font-weight: 500;
    border-left: 0;
    text-align: center;
    display: inline-block;
    margin: 0;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 0;
    color: #606266;
}
.radio_input{
  position: absolute;
  left:2px;
  top:2px;
  z-index: 1;
  opacity: 0;
  cursor: pointer; 
}
/* 尺寸 */

.radio-button-small .radio_text {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 0;
}
.radio-button-mini .radio_text {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 0;
}
.radio-button-medium .radio_text {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 0;
}
</style>