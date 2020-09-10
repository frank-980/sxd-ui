<template>
    <th class="header-col">{{colName}}</th>
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
