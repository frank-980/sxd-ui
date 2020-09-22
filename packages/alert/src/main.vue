<template>
  <div :class="['message',messageType]" :style="'top:'+top+'px'">
    <i :class="['iconfont',iconType]"></i>
    <p class="messageWord">{{msg}}</p>
  </div>
</template>
<script>
  export default {
    name: 'alertSxd',
    props: {
        msg: {
            type: [String, Number],
            default: ''
        },
        type:{
            type:String,
            default:'default'
        },
        duration:{
            type:Number,
            default:3000
        },
    },
    data(){
      return{
        timer:null,
        closed:false,
        top:-46,
      }
    },
    created(){
      let that = this
      setTimeout(function(){
        that.top=56
      },100)
      this.startTimer()
    },
    computed: {
      messageType:function(){
        return this.type
      },
      iconType:function(){
        if(this.type=='default'){
          return 'icon-more'
        }else if(this.type=='success'){
          return 'icon-success'
        }else if(this.type=='warning'){
          return 'icon-warning'
        }else if(this.type=='error'){
          return 'icon-error'
        }
      }
    },
    watch: {
      top(newVal) {
        if (newVal==-46) {
          let that = this
          setTimeout(function(){
            that.$destroy(true);
            that.$el.parentNode.removeChild(that.$el);
          },400)
        }
      }
    },
    methods:{
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            /*if (!this.closed) {
              this.close();
            }*/
            this.top=-46
          }, this.duration);
        }
      },
      clearTimer() {
        clearTimeout(this.timer);
      },
    }
  };
</script>
<style>
.message.default p, .message.default i{
  color: #5e45ec
}
.message.default{
background: #e8e6f8 ;
border-color: #b1a8e7
}

.message.success p, .message.success i{
  color:#67c23a;
}
.message.success{
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.message.warning p, .message.warning i{
  color: #E6A23C;
}
.message.warning{
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.message.error p, .message.error i{
  color:#F56C6C
}
.message.error{
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.messageWord{
  line-height: 1;
  font-size:14px;
  margin:0;
  padding:0
}
.message i{
  font-size: 14px;
  line-height: 1;
  margin-right:10px;
}
.message{
  position: absolute;
  top: 56px; 
  left: 799px;
  transform-origin: center top;
  z-index:999999;
  border-radius: 7px;
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  position: fixed;
  left: 50%;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transition: top .4s,-webkit-transform .4s;
  transition: top .4s,-webkit-transform .4s;
  transition: transform .4s,top .4s;
  transition: transform .4s,top .4s,-webkit-transform .4s;
  padding: 15px 15px 15px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>