<template>
<div>
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Select 选择器</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">当选项过多时，使用下拉菜单展示并选择内容。</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code1" height="470px">
      <template slot="source">
        <sxd-select v-model="selectVal">
          <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
          <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
        </sxd-select>
        <h4 style="display:inline;margin-left:50px">绑定值为:{{selectVal}}</h4>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          v-model 的值为当前被选中的 el-option 的 value 属性值
        </p>
      </template>
    </Block-code>
<!--有禁用选项-->
    <Block-code title="有禁用选项" :code="code2" height="850px">
      <template slot="source">
        <sxd-select placeholder="请输入">
          <sxd-select-options
            v-for="(item,index) in list" 
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></sxd-select-options>
        </sxd-select>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          在sxd-select-options中，设定disabled值为 true，即可禁用该选项
        </p>
      </template>
    </Block-code>
<!--禁用状态-->
    <Block-code title="禁用状态" :code="code3" height="450px">
      <template slot="source">
        <sxd-select disabled placeholder="请输入">
          <sxd-select-options
            v-for="(item,index) in list" 
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></sxd-select-options>
        </sxd-select>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          为sxd-select设置disabled属性，则整个选择器不可用
        </p>
      </template>
    </Block-code>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Select Attributes</p>
    <sxd-tablepro :columns="columns" :data="data1">
    </sxd-tablepro>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Option Attributes</p>
    <sxd-tablepro :columns="columns" :data="data2">
    </sxd-tablepro>
</div>
</template>
<script>
  export default {
    props: {
      
    },
    data(){
      return{
        selectVal:'',
        list:[
          {
            label:"宝山区",
            value:"宝山区",
          },
          {
            label:"普陀区",
            value:"普陀区",
            disabled:true
          }
        ],
        data1:[
            {
                arguments: 'disabled',
                brief: "是否禁用",
                type: 'boolean',
                options: '—',
                default:"false"
            },
            {
                arguments: 'clearable',
                brief: "是否清空选项",
                type: 'boolean',
                options: '—',
                default:"false"
            },
            {
                arguments: 'placeholder',
                brief: "占位符",
                type: 'string',
                options: '—',
                default:"请选择"
            },
        ],
        columns: [
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
        data2:[
            {
                arguments: 'label',
                brief: "选项的标签",
                type: 'string',
                options: '—',
                default:"—"
            },
            {
                arguments: 'value',
                brief: "选项的值",
                type: 'string',
                options: '—',
                default:"—"
            },
            {
                arguments: 'disabled',
                brief: "是否禁用该选项",
                type: 'boolean',
                options: '—',
                default:"false"
            },
        ],
       code1:{
           html:`
    <sxd-select v-model="selectVal">
      <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
      <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
    </sxd-select>
           `,
           javascript:`
    export default {
      data(){
        return {
          selectVal:''
        }
      }
    }
            `
       },
       code2:{
           html:`
    <sxd-select placeholder="请输入">
      <sxd-select-options
        v-for="(item,index) in list" 
        :key="index"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></sxd-select-options>
    </sxd-select>
           `,
           javascript:`
    export default {
      data(){
        return {
          list:[
            {
              label:"宝山区",
              value:"宝山区",
            },
            {
              label:"普陀区",
              value:"普陀区",
              disabled:true
            }
          ],
        }
      }
    }
            `
       },
       code3:{
           html:`
    <sxd-select disabled placeholder="请输入">
      <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
      <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
    </sxd-select>
           `,
           javascript:`
    export default {
      data(){
        return {
        }
      }
    }
            `
       }
      }
      
    },
    methods:{
    }
  };
</script>