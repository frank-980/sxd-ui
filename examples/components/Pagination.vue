<template>
<div>
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Pagination 分页(开发中)</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">当数据量过多时，使用分页分解数据。</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code1" height="398px">
      <template slot="source">
        <!--<sxd-pagination 
        total="41"
        page-size="10"
        :page-sizes="[5,10,15]"
        @sizeChange="handleSize"
        @currentChange="handleCurrent"></sxd-pagination>-->

        <sxd-pagination 
        total="81"
        page-size="10"
        :currentpage.sync="currentPage"
        :page-sizes="[5,10,15]"
        @sizeChange="handleSize"
        @currentChange="handleCurrent"></sxd-pagination>
        {{currentPage}}
        <!--<sxd-pagination 
        total="51"
        page-size="10"
        :currentpage.sync="currentPage"
        :page-sizes="[5,10,15]"
        @sizeChange="handleSize"
        @currentChange="handleCurrent"></sxd-pagination>-->
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          在sxd-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。
        </p>
      </template>
    </Block-code>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Pagination Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data1"></sxd-tablepro>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Events Events</p>
    <sxd-tablepro :columns="columns2" :data="data2"></sxd-tablepro>
</div>
</template>
<script>
  export default {
    props: {
      
    },
    data(){
      return{
        currentPage:5,
        data1:[
            {
                arguments: 'page-size',
                brief: "每页显示条目个数",
                type: 'string / number ',
                options: '—',
                default:"10"
            },
            {
                arguments: 'page-sizes',
                brief: "每页显示个数选择器的选项设置",
                type: 'array',
                options: '—',
                default:"—"
            },
            {
                arguments: 'total',
                brief: "总条目数",
                type: 'string / number ',
                options: '—',
                default:"—"
            },
        ],
        data2:[
            {
                name: 'sizeChange',
                brief: "pageSize 改变时会触发",
                params: '每页条数',
            },
            {
                name: 'currentChange',
                brief: "currentPage 改变时会触发",
                params: '当前页',
            },
        ],
        columns1: [
            {
                title: '参数',
                key: 'arguments'
            },
            {
                title: '说明',
                key: 'brief'
            },
            {
                title: '类型',
                key: 'type'
            },
            {
                title: '可选值',
                key: 'options',
                
            },
            {
                title: '默认值',
                key: 'default',
            }
        ],
        columns2: [
            {
                title: '事件名',
                key: 'name'
            },
            {
                title: '说明',
                key: 'brief'
            },
            {
                title: '参数',
                key: 'params'
            }
        ],
       code1:{
           html:`
    <sxd-checkbox label="宝山区" v-model="checked"></sxd-checkbox>
           `,
           javascript:`
    export default {
      data(){
        return {
          checked:true
        }
      }
    }
            `
       },
       code2:{
           html:`
    <sxd-checkbox label="宝山区" disabled v-model="checked2" ></sxd-checkbox>
    <sxd-checkbox label="普陀区" disabled v-model="checked3" ></sxd-checkbox>
           `,
           javascript:`
    export default {
      data(){
        return {
          checked2:true,
          checked3:false
        }
      }
    }
            `
       },
      }
      
    },
    mounted(){
      //setInterval(()=>{console.log(this.currentPage)},1000)
    },
    methods:{
      handleCurrent(val){
          
      },
      handleSize(val){
          
      }
    }
  };
</script>