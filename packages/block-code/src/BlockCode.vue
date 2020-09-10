<template>
  <div class="blockCode">
    <h1 class="blockTit">{{title}}</h1>
    <div class="block">
        <div class="source">
            <sxd-input/>
        </div>
        <div class="code" :style="'height:'+codeHeight">
            <pre style="margin:0" v-highlightjs="code.html"><code class="html"></code></pre>
            <pre style="margin:0" v-highlightjs="code.javascript"><code class="javascript"></code></pre>
        </div>
        <div class="blockCodeControl" @click="is_hideCode=!is_hideCode">
            <i class="block-icon iconfont sxd-code" :style="'transform:rotate('+block_deg+'deg);'"/>
            <span class="block-span">{{block_text}}</span>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlockCode',
  props:{
      title:{
          type:String,
          required:true
      },
      code:{
          type:Object,
          required:true
      }
  },
  data () {
    return {
        block_deg:0,
        block_text:"显示代码",
        is_hideCode:true,
        codeHeight:0,
    }
  },
  created(){
  },
  methods: {
  },
  watch:{
      is_hideCode:function(n,o){
          if(n){
              this.block_deg=0
              this.block_text="显示代码"
              this.codeHeight="0px"
          }else{
              this.block_deg=180
              this.block_text="隐藏代码"
              this.codeHeight='192px'
          }
      }
  }
}
</script>

<style scoped>
.blockCode{
    width:100%;
    
}
.block{
    border:1px solid #ebebeb;
    transition: .4s all;
}
.block:hover{
    box-shadow:0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5)
}
.blockTit{
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
}
.source{
position: relative;
    padding: 24px;
}
.code{
    background: #282c34;
    border-top: 1px solid #eaeefb;
    -webkit-transition: height 0.2s;
    transition: height 0.2s;
    overflow: hidden;
}
.blockCodeControl{
    height:44px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
}
.block:hover .block-icon{
    color:#7763e9;
    margin-left:-30px
}
.block:hover .block-span{
    color:#7763e9;
    transform: translateX(0px);
    opacity: 1;
}
.blockCodeControl .block-icon{
    display: inline-block;
    line-height: 44px;
    font-size:16px;
    color:#d3dce6;
    transition: .2s;
}
.blockCodeControl .block-span{
    display: inline-block;
    line-height: 44px;
    font-size:14px;
    color:#d3dce6;
    transform: translateX(30px);
    transition: .3s;
    opacity: 0;
}
</style>
