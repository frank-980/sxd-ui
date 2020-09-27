<template>
<div >
  <span>共{{total}}条</span>
  <sxd-select v-model="size">
    <sxd-select-options v-for="item in pageSizes" :key="item" :label="item" :value="item">
    </sxd-select-options>
  </sxd-select> 条/页
  <div>
    <!--头-->
    <span class="pageNum"><i class="iconfont icon-arrow-left-filling"></i></span>
    <span :class="['pageNum',currant_page==1?'cur':'']" @click="changeCur(1)">1</span>
    <!--省略号-->
    <span class="pageNum" @click="backFive" v-if="sizeArray[0]!=2"><i class="iconfont icon-arrow-double-left"></i></span>

    <!--中间5个数字-->
    <span 
    v-for="item in sizeArray" 
    :key="item" 
    :class="['pageNum',currant_page==item?'cur':'']"
    @click="changeCur(item)"
    >{{item}}</span>

    <!--省略号-->
    <span class="pageNum" @click="forwordFive" v-if="sizeArray[4]!=pageLength-1"><i class="iconfont icon-arrow-double-right"></i></span>
    <!--屁股-->
    <span :class="['pageNum',currant_page==pageLength?'cur':'']" @click="changeCur(pageLength)">{{pageLength}}</span>
    <span class="pageNum"><i class="iconfont icon-arrow-right-filling"></i></span>
  </div>
</div>
</template>

<script>
export default {
  name: 'SxdPagination', 
  props:{
    pageSize:{
      type:[String, Number],
      default:10,
    },
    pageSizes:{
      type:Array,
      default:()=>[],
    },
    total:{
      type:String,
      default:"",
    },
    currentPage:{
      type:[String, Number],
      default:1
    },
    layout:{
      type:String,
      default:"prev, pager, next"
    },
  },
  created(){
    this.size=this.pageSize
    
    if(this.pageLength>=7){
      this.sizeArray=[2,3,4,5,6]
    }else{
      for(let i=2;i<this.pageLength;i++){
        this.sizeArray.push(i)
      }
    }
  },
  data () {
    return {
      //一页几条数据
      size:null,
      //页码数组
      sizeArray:[],
      //当前页码
      currant_page:1,
      color:"#7763e9,#9d69ef,#ce73f2,#ec75f7"
    }
  },
  methods: {
    backFive(){
      if(this.currant_page - 5 <= 1){
        this.currant_page=1
      }else{
        this.currant_page=-5
      }
      
    },
    forwordFive(){
      if(this.currant_page - 5 >= this.pageLength){
        this.currant_page=this.pageLength
      }else{
        this.currant_page=+5
      }
      
    },
    changeCur(cur){
      this.currant_page=cur
      this.$emit('currentChange',cur)
    }
  },
  watch:{
    size:function(n,o){
      this.$emit('sizeChange',n)
    },
    currant_page:function(n,o){
      if((n==3 && o>3) || (n==this.pageLength-2 && o<this.pageLength)){
        return
      }else{
        if(n>=4 && n<=this.pageLength-3) 
          this.sizeArray=[n-2,n-1,n,n+1,n+2]
      }
    }
  },
  computed:{
    pageLength:function(){
      return this.total%this.pageSize==0
        ? this.total / this.pageSize
        : parseInt(this.total / this.pageSize) + 1
    },
  }
}
</script>

<style lang="scss" scoped>
.pageNum{
  margin:0 5px;
  display: inline-block;
  width:28px;
  height:28px;
  line-height: 28px;
  font-size:16px;
  cursor:pointer;
  text-align: center;
  background: #fff;
}
.pageNum:hover{
  color:#7763e9
}
.cur{
  color:#7763e9
}
</style>