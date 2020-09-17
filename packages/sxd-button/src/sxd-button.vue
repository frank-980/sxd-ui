<template>
<div class="sxd-button">
  <button 
  :class="[type,size,{ghost:ghost}]"
  @click="click"
  :disabled="disabled||loading"
  >
  <i v-if="loading" class="loading iconfont icon-loading"></i>
  <i v-if="icon" :class="['iconfont '+icon]"></i>
    <span v-if="!icon" :class="[icon?'marginLeft5':'']"><slot /></span>
  </button>
</div>
</template>

<script>
export default {
  name: 'SxdButton', 
  props:{
    type:{
      type:String,
      default:"default",
    },
    size:{
      type:String,
      default:"big",
    },
    ghost:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    loading:{
      type:Boolean,
      default:false
    },
    icon: {
      type: String,
    },
  },
  data () {
    return {
       is_focus:false,
       color:"#7763e9,#9d69ef,#ce73f2,#ec75f7"
    }
  },
  methods: {
    click () {
      this.$emit("click")
    },
  },
  watch:{
    ghost: {
    　　handler(newName, oldName) {
      　　
    　　},
    　　immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes turn{
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    }
.loading {
  font-size:14px;
  display: inline-block;
  animation:turn 1.8s linear infinite; 
}
.marginLeft5{
  margin-left: 5px;
}
.sxd-button{
  display: inline-block;
}
/* type ghost disabled */
.sxd-button .default{
   border-color: #dcdfe6;
  background: white;
  color:#606266;
}
.sxd-button .default:focus, .sxd-button .default:hover{
  border-color: #7763e9;
  background: white;
  color:#7763e9
}
.default[disabled] {
  color: #c0c4cc !important;
  background: white !important;
  border-color: #ebeef5 !important;
  cursor: not-allowed !important;
}

.sxd-button .primary{
  border-color: #7763e9;
  background: #7763e9;
  color:white
}
.sxd-button .primary.ghost{
  border-color: #7763e9;
  background: white;;
  color:#7763e9
}
.sxd-button .primary:focus, .sxd-button .primary:hover{
  border-color: #9e92e7;
  background: #9e92e7;
  color:white
}
.sxd-button .primary.ghost:focus, .sxd-button .primary.ghost:hover{
  border-color: #7763e9;
  background: #7763e9;
  color:white
}
.primary[disabled] {
  color: white !important;
  background: #a99de1 !important;
  border-color: #a99de1 !important;
  cursor: not-allowed !important;
}

.sxd-button .success{
  border-color: #67c23a;
  background: #67c23a;
  color:white
}
.sxd-button .success.ghost{
  color: #67c23a;
  background: white;
  border-color: #67c23a;
}
.sxd-button .success:focus, .sxd-button .success:hover{
  border-color: #85ce61;
  background: #85ce61;
  color:white;
}
.sxd-button .success.ghost:focus, .sxd-button .success.ghost:hover{
  border-color: #67c23a;
  background: #67c23a;
  color:white;
}
.success[disabled] {
  color: white !important;
  background: #b3e19d !important;
  border-color: #b3e19d !important;
  cursor: not-allowed !important;
}

.sxd-button .danger{
  border-color: #f56c6c;
  background: #f56c6c;
  color:white
}
.sxd-button .danger.ghost{
  color: #f56c6c;
  background: white;
  border-color: #f56c6c;
}
.sxd-button .danger:focus, .sxd-button .danger:hover{
  border-color: #f78989;
  background: #f78989;
  color:white
}
.sxd-button .danger.ghost:focus, .sxd-button .danger.ghost:hover{
  border-color: #f56c6c;
  background: #f56c6c;
  color:white
}
.danger[disabled] {
  color: white !important;
  background: #fab6b6 !important;
  border-color: #fab6b6 !important;
  cursor: not-allowed !important;
}
/* size */
.sxd-button .big{
  padding:12px 20px;
  font-size:14px;
}
.sxd-button .middle{
  padding:10px 20px;
  font-size:14px;
}
.sxd-button .small{
  padding:9px 15px;
  font-size:12px
}





.sxd-button button{
  display: flex;
  align-items: center;
  position: relative;
  display: inline-block;
  margin:0;
  line-height: 1;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;

  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  outline: none;
}
</style>