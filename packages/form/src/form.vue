<template>
    <form :class="[('form-'+labelPosition),'sxd-form']">
        <slot/>
    </form>
</template>
<script>
export default {
  name: 'SxdForm', 
  componentName: 'SxdForm',
  provide() {
    return {
      Form: this
    };
  },
  props:{
      labelPosition:{
        type:String,
        default:"left"
      },
      labelWidth:{
          type:String,
          default:"auto"
      },
      hideAsterisk:{
          type:Boolean,
          default:false
      },
      showMessage:{
          type:Boolean,
          default:true
      },
      statusIcon:Boolean,
      model:{},
      rules:Object
  },
  data(){
    return {
      widthArr:[],
      fields:[]
    }
  },
  created(){
    this.$on("form.addField",(field)=>{
      if(field.prop){
        this.fields.push(field)
      }
    })
    this.$on("form.removeField",(field)=>{
      if(field.prop){
        this.fields.splice(this.fields.indexOf(field), 1);
      }
    })
  },
  methods:{
    addItemToWidthArr(val){
      this.widthArr.push(val)
    },
    /* 校验所有字段 */
    validate(callback){
      let valid = true
      let count = 0
      let invalidFields = {}
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      this.fields.forEach(field => {
        field.validate("", (message, field) => {
          if(message){
            valid = false
          }
          invalidFields = Object.assign({},invalidFields,field)
          if(typeof callback==='function' && ++count == this.fields.length){
            callback(valid,invalidFields)
          }
        })
      })
    },
    /* 检查具体某个字段 */
    validateFields(prop){
      let props = [].concat(prop)
      let fields = this.fields.filter(item=>props.indexOf(item.prop)!==-1)
      if(!fields || fields.length==0){
        return
      }
      fields.forEach(field=>{
        field.validate("",(err,fil)=>{
        })
      })
    }
  },
  computed:{
    getLongestItem(){
      return this.widthArr.length==0?0:Math.max(...this.widthArr)
    }
  }
}
</script>  
<style scoped>

</style>