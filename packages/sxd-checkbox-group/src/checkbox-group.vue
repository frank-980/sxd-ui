<template>
  <div style="display:inline-block">
    <div v-for="(item,index) in List" :key="index" class="checkbox-group" @click="checkbox(index)">
      <div :class="['checkItem',item.disabled?'not-allowed':'']">
        <div :class="['checkWrap',item.checked?'checked':'',]">
          <i :class="['checkIcon iconfont icon-select']"></i>
        </div>
        <checkbox-item :data="item"></checkbox-item>
      </div>
    </div>
  </div>
</template>

<script>
import checkboxItem from './checkbox.vue'
export default {
  name: 'SxdCheckboxGroup', 
  props:{
    value:{
      default:[],
    },
    min:[String, Number],
    max:[String, Number],
    overstep:{
      type:Function,
      default:function(){

      }
    }
  },
  components:{checkboxItem},
  mounted(){
    let slot = this.$slots.default
    for(let i=0;i<slot.length;i++){
      this.List.push({
        label:slot[i].componentOptions.propsData.label,
        disabled:slot[i].componentOptions.propsData.disabled==''||slot[i].componentOptions.propsData.disabled==true,
        checked:JSON.stringify(this.value).indexOf(slot[i].componentOptions.propsData.label)==-1?false:true
      })
    }
    console.log(this.List)
  },
  data () {
    return {
       List:[],
    }
  },
  methods: {
    getChecked(){
      let num=0
      for(let i=0;i<this.List.length;i++){
        if(this.List[i].checked){
          num++
        }
      }
      return num
    },
    checkbox(index){
      let num = this.getChecked()
      let min = parseInt(this.min);
      let max = parseInt(this.max);
      if(this.List[index].checked){
        //选中状态  num不能小于最小值
        if(min && num<=min){
          this.overstep('min',min)
          //console.log(num,min,'小于最小值')
          return false
        }
      }else{
        //未选中状态  num不能大于最大值
        if(max && num>=max){
          this.overstep('max',max)
          //console.log(num,max,'大于最大值')
          return false
        }
      } 
      this.List[index].checked=!this.List[index].checked
    }
  },
  watch:{
    List: {
    　　handler(n, o) {
          let arr = []
          n.filter(item=>{
            if(item.checked){
              arr.push(item.label) 
            }
          })
      　　this.$emit('input',arr)
    　　},
    　　immediate: true,
        deep:true
    }
  }
}
</script>

<style scoped>
.pointor{
  cursor:pointer
}
.not-allowed{
  cursor: not-allowed !important
}
.not-allowed .checkWrap{
  background-color: #edf2fc;
    border-color: #dcdfe6;   
}
.not-allowed .checkIcon{
  color: #edf2fc;
}
.checkbox-group{
  display: inline-block;
  margin-left: 30px;
}
.checkbox-group:first-child{
  display: inline-block;
  margin-left:0px;
}
.checkItem{
  display: flex;
  align-items: center;
  cursor:pointer
}
.checkWrap.checked{
  background:#7763e9 ;
  border:1px solid #7763e9 ;
}
.not-allowed .checkWrap.checked{
  background-color: #edf2fc ;
    border-color: #dcdfe6;
}
.checkWrap:hover{
  border:1px solid #7763e9;
}
.checkWrap{
  width:14px;
  height:14px;
  background:white;
  display: inline-block;
  position: relative;
  border:1px solid #dcdfe6;
  background:white ;
  border-radius: 2px;
  box-sizing: border-box;
}
.checkIcon{
  position: absolute;
  left:0;
  top:1px;
  font-size:12px;
  line-height: 1;
  color:white
}
.not-allowed .checkIcon{
color:#c0c4cc;
}
.not-allowed .label{
  color:#c0c4cc; 
}
.label{
  padding-left:10px;
  color:#606266;
  user-select: none;
}
.labelChecked{
  color:#7763e9;
}
</style>