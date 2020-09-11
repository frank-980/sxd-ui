<template>
    <div>
        <slot :row="tableData" :test="test"></slot>
    </div>
</template>

<script>

export default {
  name: 'SxdTablecol',
  props:{
      colName:{
          type:String,
          default:""
      },
      prop:{
          type:String,
          default:""
      },
  },
  data () {
    return {
        test:"abc",
        tableData:[
            {
                name:'sxddddddddd',
                age:222,
                time:"2020"
            },
            {
                name:'sxd2',
                age:222,
                time:"2022"
            },
        ],
    }
  },
  created(){

  },
  methods: {
  },
}
</script>

<style scoped>
.header-col{
    text-align: left;
    border-bottom:1px solid #ebeef5;
    margin:0;
    padding: 12px 10px;
    color:#909399;
}
</style>
