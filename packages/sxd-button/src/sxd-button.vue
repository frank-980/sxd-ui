<template>
<div class="sxd-button">
  <button 
  :class="[type?'sxd-btn-'+type:'']"
  @click="click"
  :disabled="disabled||loading"
  >
  <i v-if="loading" class="loading iconfont sxd-iconindex"></i>
  <i v-if="loading && (icon!='')" :class="icon==''?'': 'iconfont '+icon"></i>
    <slot />
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
    icon: {
      type: String,
      default: ''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    loading:{
      type:Boolean,
      default:false
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
  }
}
</script>

<style lang="scss" scoped>
@keyframes turn{
       from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
    }
.loading {
  display: inline-block;
  animation:turn 1s linear infinite; 
}
.iconfont{
  margin-right:6px
}

.sxd-button .sxd-btn-primary{
  border-color: #7763e9;
  background: #7763e9;;
  color:white
}
.sxd-button .sxd-btn-primary:focus, .sxd-button .sxd-btn-primary:hover{
  border-color: #9d69ef;
  background: #9d69ef;
  color:white
}
.sxd-btn-primary[disabled] {
  color: white !important;
  background: gray !important;
  border-color: gray !important;
  cursor: not-allowed !important;
}

.sxd-button .sxd-btn-success{
  border-color: #67c23a;
  background: #67c23a;
  color:white
}
.sxd-button .sxd-btn-success:focus, .sxd-button .sxd-btn-success:hover{
  border-color: #85ce61;
  background: #85ce61;
  color:white
}
.sxd-btn-success[disabled] {
  color: white !important;
  background: gray !important;
  border-color: gray !important;
  cursor: not-allowed !important;
}

.sxd-button .sxd-btn-danger{
  border-color: #f56c6c;
  background: #f56c6c;
  color:white
}
.sxd-button .sxd-btn-danger:focus, .sxd-button .sxd-btn-danger:hover{
  border-color: #f78989;
  background: #f78989;
  color:white
}
.sxd-btn-danger[disabled] {
  color: white !important;
  background: gray !important;
  border-color: gray !important;
  cursor: not-allowed !important;
}







.sxd-button button{
  font-size: 16px;
  display: flex;
  align-items: center;
  position: relative;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 12px;
  padding: 0 15px;

  height: 32px;
  line-height: 1.6;

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