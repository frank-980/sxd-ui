<template>
    <th style="margin:0">{{colName}}</th>
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

</style>
