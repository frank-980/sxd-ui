<template>
    <div :class="['radio',{'is_checked':is_checked},{'is_disabled':disabled},]" @click="handleChange">
        <span class="radio_icon">
          <span class="circle_outer"></span>
          <input 
          class="radio_input"
          type="radio"
          :value="label"
          v-model="model"
          />
        </span>
        <span class="radio_text"><slot></slot></span>
    </div>
</template>
<script>
import Emiter from '~/mixins/Emiter.js'
export default {
  name: 'SxdRadio', 
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
.radio{
  display: inline-block;
  color:#606266;
  line-height: 1;
  position: relative;
  margin-right: 30px;
  cursor: pointer;
}
.is_checked .radio_text{
  color:#7763e9
}
.radio_text{
  padding-left: 10px;
  font-size: 14px;
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
.radio_icon{
    white-space: nowrap;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle; 
}
.radio.is_checked .radio_icon .circle_outer{
  border-color: #7763e9;
  background: #7763e9;
}
.radio_icon .circle_outer{
  width:14px;
  height:14px;
  display: inline-block;
  position: relative;
  border-radius: 50%;
  border: 1px solid #dcdfe6;
  background: #fff;   
  
}
.radio.is_checked .radio_icon .circle_outer:after{
  transform: translate(-50%,-50%) scale(1);
}
.radio .circle_outer:after{
  content:"";
  width:4px;
  height:4px;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%) scale(0);
  transition:all .15s ease-in;
  z-index:2020;
  border-radius: 50%;
  background: white;
}

.radio:last-child {
    margin-right: 0;
}
/*禁用*/
.radio.is_disabled .radio_input{
  cursor: not-allowed;
}
.radio.is_disabled .radio_icon .circle_outer {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    cursor: not-allowed;
}
.radio.is_disabled .circle_outer:after{
background-color: #f5f7fa;
 cursor: not-allowed;
}
.radio.is_disabled .radio_text{
  color: #c0c4cc;
    cursor: not-allowed;
}
</style>