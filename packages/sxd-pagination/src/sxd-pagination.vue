<template>
<div >
  <span>共{{total}}条</span>
  <sxd-select v-model="size">
    <sxd-select-options v-for="item in pageSizes" :key="item" :label="item" :value="item">
    </sxd-select-options>
  </sxd-select> 条/页
  <div>
    <!--头-->
    <span class="pageNum" @click="previous"><i class="iconfont icon-arrow-left-filling"></i></span>
    <span :class="['pageNum',currant_page==1?'cur':'']" @click="changeCur(1)">1</span>
    <!--省略号-->
    <span class="pageNum" @click="backFive" v-if="sizeArray[0]!=2 && pageLength>=7"><i class="iconfont icon-arrow-double-left"></i></span>

    <!--中间5个数字-->
    <span 
    v-for="item in sizeArray" 
    :key="item" 
    :class="['pageNum',currant_page==item?'cur':'']"
    @click="changeCur(item)"
    >{{item}}</span>

    <!--省略号-->
    <span class="pageNum" @click="forwordFive" v-if="sizeArray[4]!=pageLength-1 && pageLength>=7"><i class="iconfont icon-arrow-double-right"></i></span>
    <!--屁股-->
    <span :class="['pageNum',currant_page==pageLength?'cur':'']" @click="changeCur(pageLength)">{{pageLength}}</span>
    <span class="pageNum" @click="next"><i class="iconfont icon-arrow-right-filling"></i></span>
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
    currentpage:{
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
    this.currant_page = parseInt(this.currentpage)
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
      //pageLength:页码个数(计算属性)
    }
  },
  methods: {
    previous(){
      if(this.currant_page==1) return
      
      this.currant_page=this.currant_page-1
    },
    next(){
      if(this.currant_page==this.pageLength) return
      this.currant_page=this.currant_page+1
    },
    backFive(){
      if(this.currant_page - 5 <= 1){
        this.currant_page=1
      }else{
        this.currant_page=this.currant_page - 5
      }
    },
    forwordFive(){
      if(this.currant_page + 5 >= this.pageLength){
        this.currant_page=this.pageLength
      }else{
        this.currant_page=this.currant_page + 5
      }
    },
    changeCur(cur){
      this.currant_page=cur  
      this.$emit('currentChange',cur)
    },
    computerArray(cur){

    }
  },
  watch:{
    size:function(n,o){
      this.$emit('sizeChange',n)
    },
    currant_page:{
      handler(n, o) {
        let pl= this.pageLength
      　　this.$emit('update:currentpage',n)
          if(pl<=7){
            let arr = []
            if(n==1){
              console.log("pl<7 n==1")
              arr=[2,3,4,5]
            }else{
              console.log("pl<7 n!=1")
              for(let i=2;i<pl;i++){
                arr.push(i)
              }
            }
            
            this.sizeArray = arr
            return
          }
          if(n==pl){
            this.sizeArray=[pl-5,pl-4,pl-3,pl-2,pl-1]
          }
          if((n==3 && o>3)){
            //return
            this.sizeArray=[n-1,n,n+1,n+2,n+3]
          }else if(n==this.pageLength-2 && o<this.pageLength){
            this.sizeArray=[n-3,n-2,n-1,n,n+1]
          }else{
            if(n>=4 && n<=this.pageLength-3) 
              this.sizeArray=[n-2,n-1,n,n+1,n+2]
          }
          console.log("iam back")
        }
    　　},
    　
  },
  computed:{
    pageLength:function(){
      let length = this.total % this.size==0
        ? this.total / this.size
        : parseInt(this.total / this.size) + 1
      if(this.currant_page>length){
        this.currant_page=length
      }
      return length
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
  user-select: none;
}
.pageNum:hover{
  color:#7763e9
}
.cur{
  color:#7763e9
}
</style>