<template>
<div class="wrap">
  <div class="label" v-if="$slots.labelArea">
    <slot name="labelArea"></slot>
  </div>
  <div :class="[
  'sxd-input',
  $slots.append?'fixInput':'',
  $slots.prepend?'fixInput':'',
  ]">
    <div v-if="$slots.prepend" class="prepend">
      <slot name="prepend"></slot>
    </div>
    <input 
    v-if="type!='textarea'"
    :class="[
      'sxd-ip',
      prefixIcon?'marginLeft':'',
      suffixIcon?'marginRight':'',
      $slots.append?'borderRightNone':'',
      $slots.prepend?'borderLeftNone':''
    ]"  
    :placeholder="placeholder"
    :value="value"
    :type="type"
    :disabled="disabled"
    @input="handleInput" 
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    />
    <div v-if="$slots.append" class="append">
      <slot name="append"></slot>
    </div>
    <!--前置-->
    <span v-if="prefixIcon" class="prefixIcon">
      <i style="" :class="[
      'input-icon',
      'iconfont',
      prefixIcon?prefixIcon:''
      ]"></i>
    </span>
    
    <!--后置-->
    <span v-if="getSuffixVisible">
      <span v-if="clearable" class="suffixIcon" @click="clear">
        <i style="" class="input-icon iconfont icon-error"></i>
      </span>
      <span v-else-if="suffixIcon" class="suffixIcon">
        <i :class="[
        'input-icon',
        'iconfont',
        suffixIcon?suffixIcon:''
        ]"></i>
      </span>
      <span v-else-if="needStatusIcon" class="suffixIcon">
        <i v-if="validateState=='error'" style="color:#f56c6c" class="input-icon iconfont icon-error"></i>
        <!--green #67c23a purple #7763e9-->
        <i v-else style="color:#67c23a" class="input-icon iconfont icon-success"></i>
      </span>
    </span>
  </div>
</div>
</template>

<script>
import Emiter from '~/mixins/Emiter.js'
export default {
  name: 'SxdInputpro',
  inject: {
    Form: {
      default: ''
    },
    formItem: {
      default: ''
    }
  },
  mixins:[Emiter], 
  props:{
    placeholder:{
      type:[String,Number],
      default:"请输入",
      required:false,
    },
    value:{
      type:[String,Number],
      default:"",
    },
    disabled:{
      type:Boolean,
      default:false
    },
    type:{
      type: String,
      default: 'text'
    },
    clearable: {
        type: Boolean,
        default: false,
    },
    suffixIcon: {
      type:String,
      },
    prefixIcon: String,
  },
  data () {
    return {
       
    }
  },
  watch:{
    value(value){
      this.dispatch("SxdFormItem","form.change",[value])
    }
  },
  mounted(){
    console.log(this.formItem.validateState)
    console.log(this.Form.statusIcon)
  },
  computed:{
    validateState(){
      return this.formItem.validateState
    },
    needStatusIcon() {
      return this.Form ? this.Form.statusIcon : false;
    },
    getSuffixVisible() {
      return this.$slots.suffix ||
        this.suffixIcon ||
        this.clearable ||
        (this.validateState && this.needStatusIcon);
    }
  },
  methods: {
    handleInput(event) {
      console.log(event)
      this.$emit('input', event.target.value)
    },
    handleClick(){
      this.$emit('click', '')
      
    },
    handleFocus(){
      this.$emit('focus','')
    },
    handleBlur(){
      this.$emit('blur','')
      this.dispatch("SxdFormItem","form.blur",[this.value])
    },
    clear(){
      this.$emit('input', '')
    }
  }
}
</script>

<style scoped>
:focus{outline: none;}
.borderRightNone{
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
.borderLeftNone{
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}
.fixInput{
  display: inline-table !important;
  width: 100% !important;
}
.append{
      background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.prepend{
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.marginLeft{
  padding-left:32px !important;
}
.marginRight{
  padding-right:32px !important;
}
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
    width: 100%;
}
.sxd-input .sxd-ip:disabled{
  background-color: #f5f5f5;
  cursor: not-allowed;
  border-bottom:1px solid #ccc;
}
.sxd-ip:focus{
	border-color:#7763e9
}
.prefixIcon{
  font-size:16px;
  position: absolute;
    height: 100%;
    left: 10px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    cursor:pointer
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
    cursor:pointer
}
.input-icon{
  width: 25px;
    line-height: 40px;
        height: 100%;
    text-align: center;
    transition: all .3s;
}
.label{
  display:inline-block;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
.form-item.is-error .sxd-input .sxd-ip{
    border-color: #f56c6c !important;
}
</style>