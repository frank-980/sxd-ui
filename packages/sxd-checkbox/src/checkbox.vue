<template>
  <div class="checkbox-group" @click="checkbox(index)">
    <div :class="['checkItem',disabled?'not-allowed':'']">
      <div :class="['checkWrap',value?'checked':'',]">
        <i :class="['checkIcon iconfont icon-select',]"></i>
      </div>
      <span :class="['label',value?'labelChecked':'']">{{label}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SxdCheckbox',
  props:{
    label:{
    },
    value:{

    },
    disabled:{
      type:Boolean,
      default:false
    },
  },
  data () {
    return {
    }
  },
  methods: {
    checkbox(){
      this.value=!this.value;
      this.$emit("input",this.value)
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