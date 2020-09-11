<template>
  <div class="table">
    <table style="width:100%;border-collapse:collapse">
        <tr >
            <th class="header-col" v-for="(item,index) in keysName" :key="index">
                {{item}}
            </th>
        </tr>
        <tr class="body-row" v-for="(item,index) in renderData" :key="index">
            <td class="body-col" v-for="(item2,index) in keys" :key="index">
                <span v-if="item2">{{item[item2]}}</span>
                <div v-else>
                    <slot></slot>
                </div>
            </td>
        </tr>
     </table>
  </div>
</template>

<script>

export default {
  name: 'SxdTable',
  props:{
      data:{
          type:Array,
          default:function(){return []}
      }
  },
  data () {
    return {
        renderData:[],
        keys:[],
        keysName:[],
        tableData:[
            {
                name:'sxddddddddd',
                age:111,
                time:"2020"
            },
            {
                name:'sxd2',
                age:111,
                time:"2022"
            },
        ],
    }
  },
  created(){
      console.log(this.$slots)
      let keys=[]
      let keysName=[]
      for(let i=0;i<this.$slots.default.length;i++){
          keys.push(this.$slots.default[i].componentOptions.propsData.prop)
          keysName.push(this.$slots.default[i].componentOptions.propsData.colName)
      }
      this.keys=keys
      this.keysName=keysName
        let arr=[]
        for(let i=0;i<this.data.length;i++){
            let obj={}
            for(let j=0;j<keys.length;j++){
                obj[keys[j]]=this.data[i][keys[j]]
            }
            arr.push(obj)
        }
         this.renderData=arr
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
.table{
    width:100%;
    ;
}
.header-col{
    text-align: left;
    border-bottom:1px solid #ebeef5;
    margin:0;
    padding: 12px 10px;
    color:#909399;
}
.body-row{
    text-align: left;
    width:100%;
    justify-content: space-between;
    background: white;
}
.body-row:hover{
    background: #f5f7fa;
}
.body-col{
    padding:12px 10px;
    border-bottom:1px solid #ebeef5;
}
</style>
