<template>
    <div :class="{'sxd-switch':true,'switch-disabled':disabled}">
        <span v-if="inactiveText" :class="{'switch-label':true,'label-left':true,'active':!active}">{{inactiveText}}</span>
        <span class="switch-core" :style="coreStyle" @click="switchStu">
            <span :class="{'switch-core-inner':true,'inner-right':active}"></span>
        </span>
        <span v-if="activeText" :class="{'switch-label':true,'label-right':true,'active':active}">{{activeText}}</span>
    </div>
</template>
<script>
export default {
  name: 'SxdSwitch', 
  props:{
    value:Boolean,
    disabled:Boolean,
    width:{
      type:Number,
      default:40
    },
    activeText:String,
    inactiveText:String,
    /*activeValue:String,
    inactiveValue:String,*/
    activeColor:{
      type:String,
      default:"#7763e9"
    },
    inactiveColor:{
      type:String,
      default:"#dcdfe6"
    },
  },
  data(){
    return {
      active:this.value
    }
  },
  methods:{
      switchStu(){
        if(this.disabled) return;
        this.active = !this.active
      }
  },
  watch:{
    active(n,o){
      this.$emit("input",n)
      this.$emit("change",n)
    }
  },
  computed:{
    coreStyle(){
      let style={}
      style.width = this.width + "px";
      let color = this.active?this.activeColor:this.inactiveColor
      style.background = this.disabled?"#a99de1":color
      style.borderColor = this.disabled?"#a99de1":color
      return style
    }
  }
}
</script>  
<style scoped>
.sxd-switch{
  display:flex;
  align-items:center
}
.switch-disabled .switch-core{
  cursor: not-allowed;
}
.switch-core{
    margin: 0;
    display: inline-block;
    position: relative;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
}
.switch-core .switch-core-inner{
  content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
}
.switch-core .switch-core-inner.inner-right{
  left:100%;
  margin-left:-17px
}
.switch-label{
  transition: .2s;
    height: 20px;
    line-height: 20px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: #303133;
}
.label-left{
  margin-right:10px;
}
.label-right{
  margin-left:10px;
}
.active{
  color:#7763e9
}
</style>