<template>
    <div class="selectWrap">
        <div class="selection" @mouseover="isStick=true" @mouseout="isStick=false">
          <div class="sxd-input" @click="show">
            <input ref="select" 
            :class="['sxd-ip']" 
            :disabled="disabled" 
            :placeholder="placeholder"
             v-model='inputVal' 
             @blur="hide"
             @input="handleInput"/> 
              <span class="suffixIcon" :style="rotate">
                <i class='input-icon iconfont icon-arrow-down-bold'></i>
              </span>
          </div>
        </div>
        <!--选项框-->
        <div v-if="showSuggestions" class="tri"><i class="iconfont icon-arrow-up-filling"></i></div>
        <div v-if="showSuggestions" class="dropdown" @mouseover="isStick=true" @mouseout="isStick=false">
            <div style="margin:10px 0;">
              <ul class="ul">
                  <li
                    :class="item.value===inputVal" 
                    v-for="(item,index) in data" 
                    :key="index"
                    @click="click(item.value)" 
                  >{{item.label}}</li>
              </ul>
            </div> 
        </div>
    </div>
</template>
<script>
import ren from './render.vue';
import Emiter from '~/mixins/Emiter.js'
const getOptionLabel = option =>{
  let label = option.componentOptions.propsData.label;
  if(label){
    return label
  }
  return ''
}
const getOptionValue = option =>{
  let value = option.componentOptions.propsData.value;
  if(value){
    return value 
  }
  return ''
}
const getOptionDisabled = option =>{
  if(!option.componentOptions.propsData.disabled){
    return false
  }
  return true
}
  export default {
    name: 'SxdSelect',
    mixins:[Emiter], 
    components: {ren},
    props: {
      disabled: {
        type:Boolean,
        default:false,
      },
      placeholder: {
        type:String,
        default:"请输入",
      },
      value:{
        default:""
      }
    },
    data(){
      return{
        showSuggestions:false,
        slotOptions: this.$slots.default,
        slotOptions2: this.$slots.default[0],
        data:[],
        inputVal:"",
        options:[],
        isStick:false,
        rotate:"transform:rotate(0deg)"
      }
    },
    mounted(){
      this.inputVal=this.value
      console.log(this.slotOptions)
      for(let i=0;i<this.slotOptions.length;i++){
        this.data.push(this.getOptionData(this.slotOptions[i]))
      }
    },
    watch: {
      inputVal(n,o){
        this.$emit('input',n)
        this.dispatch("SxdFormItem","form.change",[n])
      },
      value(n){
        //
      },
      disabled(n,o){
        if(n) this.rotate="cursor:not-allowed"
      }
    },
    methods:{
      show(){
        if(this.disabled){
          return
        }
        if(!this.showSuggestions){
          this.$refs.select.focus()
          this.showSuggestions=true
          this.rotate="transform:rotate(-180deg)"
        }else{
          this.showSuggestions=false
          this.rotate="transform:rotate(0deg)"
        }
        
      },
      hide(){
        if(!this.isStick){
          this.showSuggestions=false
          this.rotate="transform:rotate(0deg)"
          this.dispatch("SxdFormItem","form.blur",[this.value])
        }
      },
      handleInput(){
        this.$emit("form.blur",[this.value])
      },
      click(val){
        this.inputVal=val
        this.$emit('input',val)
        this.rotate="transform:rotate(0deg)"
        this.showSuggestions=false
      },
      getOptionData(opt){
        return {
          value:getOptionValue(opt),
          label:getOptionLabel(opt),
          disabled:getOptionDisabled(opt)
        }
      },
      selectOptions(){
        const selectOptions = [];
        const slotOptions=this.slotOptions
        for(let i=0;i<slotOptions.length;i++){
          selectOptions.push(this.processOption(slotOptions[i]))
        }
        return selectOptions
      },
      processOption(option){
        return {
          ...option,
          componentOptions:{
            ...option.componentOptions,
            propsData:this.getOptionData(option)
          }
        }
      },
    }
  };
</script>
<style scoped>
.selectWrap{
position: relative;
display: inline-block;
}
  .dropdown{
    position: absolute;
    z-index:9;
    top:45px;
    left:0;
    overflow: scroll;
    height: 100%;
    max-height: 274px;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    margin: 5px 0;
    width:200px;
    height:auto;
  }
  .tri{
    position: absolute;
    top:36px;
    left:110px;
    color:#e4e7ed;
    z-index:9
  }

.sxd-input{
   position: relative;
   width:200px;
   display: inline-block;
}
:focus{outline: none;}
.sxd-ip:disabled{
  background-color: #f5f5f5;
  cursor: not-allowed;
  border-bottom:1px solid #ccc;
  color: #c0c4cc;
}
.sxd-ip{
      background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: 16px;
    height: 40px;
    line-height: 1;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
   width:100%;
   cursor:pointer
}
.sxd-ip:focus{
	border-color:#7763e9
}
.suffixIcon{
  font-size:16px;
  position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    cursor:pointer;
    transform:rotate(0deg)
}
.input-icon{
  width: 25px;
    line-height: 40px;
        height: 100%;
    text-align: center;
    transition: all .3s;
}
.form-item.is-error .sxd-input .sxd-ip{
    border-color: #f56c6c !important;
}
</style>