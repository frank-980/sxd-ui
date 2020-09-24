<template>
<div>
    <div>
        <div class="selection">
            <sxd-inputpro @focus="showSuggestions=true"  v-model="inputVal" clearable/>
        </div>
        <div v-if="showSuggestions" class="dropdown">
            <div style="margin:10px 0;">
            <ul class="ul">
                <ren v-for="(item,index) in data" :key="index"
                @click="click(item.value)" :data="item"></ren>
            </ul>
            </div> 
        </div>
    </div>
    
</div>
</template>
<script>
import ren from './render.vue';
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
  export default {
    name: 'SxdSelect',
    components: {ren},
    props: {
      name: String
    },
    data(){
      return{
        showSuggestions:false,
        slotOptions: this.$slots.default,
        slotOptions2: this.$slots.default[0],
        data:[],
        inputVal:"",
        options:[]
      }
      
    },
    mounted(){
      //console.log(this.selectOptions())
      //this.$on('S', this.onOptionClick);
      console.log(this.$slots.default)
      for(let i=0;i<this.slotOptions.length;i++){
        this.data.push(this.getOptionData(this.slotOptions[i]))
      }
      //this.options = this.selectOptions()
      //this.data=this.getOptionData(this.slotOptions)
    },
    watch: {
      inputVal(n,o){
        this.$emit('input',n)
      }
    },
    methods:{
      hide(){
        if(this.inputVal){
          this.showSuggestions=false
        }
      },
      click(val){
        console.log(val)
        this.inputVal=val
        this.$emit('input',val)
        this.showSuggestions=false
      },
      getOptionData(opt){
        return {
          value:getOptionValue(opt),
          label:getOptionLabel(opt)
        }
      },
      selectOptions(){
        const selectOptions = [];
        const slotOptions=this.slotOptions
        for(let i=0;i<slotOptions.length;i++){
          selectOptions.push(this.processOption(slotOptions[i],1,1))
        }
        return selectOptions
      },
      processOption(option,values,focused){
        return {
          ...option,
          componentOptions:{
            ...option.componentOptions,
            propsData:this.getOptionData(option)
          }
        }
      },
      a(val){
        console.log(val)
      }
    }
  };
</script>
<style scoped>
  .dropdown{
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

</style>