<template>
    <table style="width:100%;border-collapse:collapse">
        <tr >
            <th class="header-col" v-for="(item,index) in columns" :key="index">{{item.title}}</th>
        </tr>
        <tr class="body-row" v-for="(item,index) in data" :key="index">
            <td class="body-col" v-for="(item2,index2) in columns" :key="index2">
                <!--有插槽属性-->
                <div v-if="item2.slot">
                    <!--绑定插槽属性给父元素-->
                    <slot :name="item2.slot" :row="item" :index="index"></slot>
                </div>
                <!--无插槽属性-->
                <div v-else>{{item[item2.key]}}</div>
            </td>
        </tr>
     </table>
</template>

<script>

export default {
  name: 'SxdTablepro',
  props:{
      columns:{
          type:Array,
          default:function(){return []}
      },
      data:{
          type:Array,
          default:function(){return []}
      }
  },
  data () {
    return {
        
    }
  },
  created(){
      
  },
  methods: {
  },
  watch:{
      
  }
}
</script>

<style scoped>
.header-col{
    text-align: left;
    border-bottom:1px solid #ebeef5;
    margin:0;
    padding: 12px 10px;
    color:#909399;
    font-size:14px;
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
    font-size:14px;
}
</style>
