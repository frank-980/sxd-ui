<template>
    <div :class="['form-item',{
        'is-error':validateState==='error',
        'is-validating': validateState === 'validating',
        'is-success': validateState === 'success',
        'is-no-asterisk': prop && !Form.hideAsterisk && isRequired
        }]">
        <div class="item_label">
            <label-wrap :updateAll="true" :autoWidth="labelStyle && labelStyle.width=='auto'">
                <div class="paddingR" :style="labelStyle">
                    <span class="asterisk">*</span>
                    <slot name="label">{{label}}</slot>
                </div>
            </label-wrap>
        </div>
        <div class="item_content" :style="contentStyle">
            <slot/>
            <transition name="flew">
                <div :class="['form-item_error']" v-if="Form.showMessage && validateState==='error'">
                    {{validateMessage}}
                </div>
            </transition>
        </div>
        <div style="clear:both"></div>
    </div>
</template>
<script>
import LabelWrap from './label-wrap';
import Emiter from '~/mixins/Emiter.js'
import schema from 'async-validator'
export default {
  name: 'SxdFormItem', 
  componentName: 'SxdFormItem',
  mixins:[Emiter],
  components: {
    LabelWrap
  },
  inject: ['Form'],
  provide() {
        return {
            formItem: this
        };
    },
  props:{
      label:{},
      labelWidth:{
          type:String,
      },
      prop:String
  },
  data(){
    return {
      computedLabelWidth: '',
      validateState:"",
      validateMessage:"",
      validateDisabled:true
    }
  },
  mounted(){
      this.dispatch('SxdForm', 'form.addField', [this]);
  },
  beforeDestroy() {
      this.dispatch('SxdForm', 'form.removeField', [this]);
  },
  created(){
      this.addEventListeners()
  },
  methods:{
      validate(trigger,callback){
          this.validateDisabled=false
          let rules = this.getFilteredRule(trigger)
          /*if (rules && rules.length > 0) {
            rules.forEach(rule => {
                delete rule.trigger;
            });
          }*/
          //descript校验规则
          let descriptor = {}
          descriptor[this.prop] = rules
          let validate = new schema(descriptor)
          //model校验实例
          const model = {};
          model[this.prop] = this.fieldValue;
          validate.validate(
              model,
              (error,filed)=>{
                  this.validateState=error?"error":"success"
                  this.validateMessage=error?error[0].message:""
                  this.Form.$emit("validate",this.prop,!error,this.validateMessage || null)
                  callback(this.validateMessage,filed)
              }
            )
      },
      getFilteredRule(trigger){
          let rules = this.Form.rules[this.prop]
          return rules.filter((rule)=>{
              if(!trigger || trigger==="") return true;
              if(Array.isArray(rule.trigger)){
                  return rule.trigger.indexOf(trigger)>-1
              }else{
                  return rule.trigger==trigger
              }
          })
      },
      onFieldBlur(){
          this.validate("blur")
      },
      onFieldChange(){
        if(this.validateDisabled){
            this.validateDisabled = false;
            return
        }
        this.validate("change")
      },
      updateLabelWidth(width){
          this.computedLabelWidth = width ? width+"px" : ""
      },
      addEventListeners(){
          if(this.Form.rules){
            this.$on("form.blur",this.onFieldBlur)
            this.$on("form.change",this.onFieldChange)
          }
      },
      removeEventListener(){
          this.$off()
      }
  },
  computed:{
      isRequired(){
          let rules = this.Form.rules[this.prop]
          for(let i=0;i<rules.length;i++){
              if(rules[i].required){
                  return true
              }
              return false
          }
      },
      fieldValue(){
          return this.Form.model[this.prop]
      },
      labelStyle(){
          let style={}
          if(this.Form.labelPosition=="top") return style
          let width = this.labelWidth || this.Form.labelWidth
          if(width){
              style.width=width
          }
          return style
      },
      contentStyle(){
          let style={}
          if(this.Form.labelPosition=="top") return style
          if(!this.label && !this.labelWidth && !this.Form.labelWidth) return style
          const labelWidth = this.labelWidth || this.Form.labelWidth
          if(labelWidth === "auto"){
              if(this.labelWidth==="auto"){
                  //form-item的宽度为auto；通过在label-wrap中计算并调用updateLabelWidth生成label的宽度
                  style.marginLeft=this.computedLabelWidth
              }else if(this.Form.labelWidth==="auto"){
                   //form的宽度为auto；使用form里宽度数组的最大值
                  style.marginLeft=this.Form.getLongestItem
              }
          }else{
              //有具体的px值，直接赋值
              style.marginLeft=labelWidth
          }
          return style
      }
  }
}
</script>  
<style scoped>
.form-item{
    margin-bottom:22px;
}
.form-item:last-child{
    margin-bottom:0px;
}
/* 文案区域（左） */
.item_label{
    float:left
}
.paddingR{
    height:40px;
    line-height: 40px;
}
.form-left .paddingR{
    text-align: left;
}
.form-right .paddingR{
    text-align: right;
}
.form-top .item_label{
    float:none
}
.asterisk{
    color:white;
    margin-right:4px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.is-no-asterisk .asterisk{
    color:#f56c6c;margin-right:4px
}
/* 输入区域（右） */
.item_content{
    padding-left: 12px;
    position: relative;
    height: 40px;
    line-height: 40px;
    display: flex;
}
.form-item_error{
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 12px;
}
.flew-enter-active, .flew-leave-active{
    transition: all .3s;
}
.flew-enter, .flew-leave-to{
    transform: translateX(20px);
    opacity: 0;
}
</style>