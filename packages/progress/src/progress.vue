<template>
    <div :class="['progress']">
        <div class="bar">
            <div class="out" :style="{height:strokeWidth+'px'}">
                <div class="inner" :style="innerStyle">
                    <div v-if="textInside" class="inner_text" :style="[{color:textColor},{lineHeight:strokeWidth+'px'}]">
                    {{content}}
                    </div>
                </div>
            </div> 
                
        </div> 
        <div v-if="!textInside" class="out_text" :style="textStyle">
            {{content}}
        </div>
    </div>
</template>
<script>
export default {
  name: 'SxdProgress', 
  props:{
    percentage:{
        required:true,
        type:Number,
        default:0,
        validator:function(value){
            return value>=0 && value<=100
        }
    },
    strokeWidth:{
        type: Number,
        default:6,
        validator:function(value){
            return value>0
        }
    },
    color:{
        type:[String,Function,Array],
        default:"#7763e9",
    },
    textColor:{
        type:String,
    },
    textInside:{
        type:Boolean,
        default:false
    },
    format:Function
  },
  data(){
    return {
    }
  },
  mounted(){
  },
  methods:{
      getCurrentColor(percentage){
          if(typeof this.color === 'function'){
              return this.color(percentage)
          }else if(typeof this.color === 'string'){
              return this.color
          }else{
              //数组
              return this.getLevelColor(percentage)
          }
      },
      getLevelColor(percentage){
          let color = this.getColorArray().sort((a,b)=>a.percentage-b.percentage)
          let length = color.length
          for(let i=0;i<length;i++){
              if(color[i].percentage>percentage){
                  return color[i].color
              }
          }
          return color[length-1].color
      },
      getColorArray(){
          let color = this.color;
          let step = 100/color.length
          return color.map((item,index)=>{
              if(typeof item === 'string'){
                  return {
                      color:item,
                      percentage:(index+1)*step
                  }
              }
              return item
          })
      },
  },
  computed:{
      textStyle(){
          let style={}
          console.log(this.strokeWidth)
          style.fontSize = 12 + this.strokeWidth * 0.4 +"px"
          //style.lineHeight=this.strokeWidth
          if(typeof this.textColor == 'string'){
              style.color=this.textColor
          }
          return style
      },
      innerStyle(){
          let style={}
          style.background = this.getCurrentColor(this.percentage)
          style.width = this.percentage + "%"
          return style
      },
      content(){
          if(typeof this.format == 'function'){
              return this.format(this.percentage)
          }
          return this.percentage+"%"
      }
  }
}
</script>  
<style scoped>
.progress{
    width:350px;
}
.out{
    position: relative;
    background-color: #ebeef5;
    overflow: hidden;
    border-radius: 100px;
}
.inner{
    position: absolute;
    height:inherit;
    border-radius: 100px;
    transition: width .6s ease;
}
.bar{
    padding-right: 50px;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-right: -55px;
    box-sizing: border-box;
}
.inner_text{
    display: block;
    text-align: right;
    color: #fff;
    font-size: 12px;
    margin: 0 5px;
    height:inherit;
    line-height: 1;
}
.out_text{
    color: #606266;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    line-height: 1;
}
</style>