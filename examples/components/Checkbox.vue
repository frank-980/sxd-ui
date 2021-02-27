<template>
<div>
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Checkbox 多选框</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">一组备选项中进行多选</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code1" height="398px">
      <template slot="source">
        <sxd-checkbox label="宝山区" v-model="checked" ></sxd-checkbox>
        <h4 style="display:inline;margin-left:50px">
          绑定值为布尔值:{{checked}}
        </h4>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          在sxd-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。
        </p>
      </template>
    </Block-code>
<!--禁用状态-->
    <Block-code title="禁用状态" :code="code2" height="445px">
      <template slot="source">
        <sxd-checkbox label="宝山区" disabled v-model="checked2" ></sxd-checkbox>
        <sxd-checkbox label="普陀区" disabled v-model="checked3" ></sxd-checkbox>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          设置disabled属性即可。
        </p>
      </template>
    </Block-code>
<!--多选框组-->
    <Block-code title="多选框组" :code="code3" height="545px">
      <template slot="source">
        <sxd-checkbox-group v-model="checkList">
          <sxd-checkbox label="宝山区"></sxd-checkbox>
          <sxd-checkbox label="普陀区"></sxd-checkbox>
          <sxd-checkbox label="杨浦区" disabled></sxd-checkbox>
        </sxd-checkbox-group>
        <h4 style="display:inline;margin-left:50px">
          绑定值为数组:<span v-for="item in checkList" :key="item">{{item}}
          </span>
        </h4>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。
        </p>
      </template>
    </Block-code>
<!--数量限制-->
    <Block-code title="数量限制" :code="code4" height="930px">
      <template slot="source">
        <sxd-checkbox-group v-model="checkList2" min="1" max="2" :overstep="handleOverstep">
          <sxd-checkbox label="宝山区"></sxd-checkbox>
          <sxd-checkbox label="普陀区"></sxd-checkbox>
          <sxd-checkbox label="杨浦区"></sxd-checkbox>
          <sxd-checkbox label="浦东新区"></sxd-checkbox>
        </sxd-checkbox-group>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          使用 min 和 max 属性能够限制可以被勾选的项目的数量。
          overstep是超出限制的回调函数 , 超出最大值返回"max"和最大值。低于最小值返回"min"和最小值。
        </p>
      </template>
    </Block-code>


    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Checkbox Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data1"></sxd-tablepro>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Checkbox-group Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data2"></sxd-tablepro>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Checkbox-group Events</p>
    <sxd-tablepro :columns="columns2" :data="data3"></sxd-tablepro>
</div>
</template>
<script>
  export default {
    props: {
      
    },
    data(){
      return{
        checkList:["杨浦区"],
        checkList2:["宝山区"],
        checked:true,
        checked2:true,
        checked3:false,
        data1:[
            {
                arguments: 'label',
                brief: "选中状态的值",
                type: 'string / number ',
                options: '—',
                default:"—"
            },
            {
                arguments: 'disabled',
                brief: "是否禁用",
                type: 'boolean',
                options: '—',
                default:"false"
            },
        ],
        data2:[
            {
                arguments: 'min',
                brief: "可被勾选的 checkbox 的最小数量",
                type: 'number/string',
                options: '—',
                default:"—"
            },
            {
                arguments: 'max',
                brief: "可被勾选的 checkbox 的最大数量",
                type: 'number/string',
                options: '—',
                default:"—"
            },
        ],
        data3:[
            {
                name: 'overstep',
                brief: "超出限制的回调函数",
                params: 'tag,val',
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
       code3:{
           html:`
    <sxd-checkbox-group v-model="checkList">
      <sxd-checkbox label="宝山区"></sxd-checkbox>
      <sxd-checkbox label="普陀区"></sxd-checkbox>
      <sxd-checkbox label="杨浦区" disabled></sxd-checkbox>
    </sxd-checkbox-group>
           `,
           javascript:`
    export default {
      data(){
        return {
          checkList:["杨浦区"]
        }
      }
    }
            `
       },
       code4:{
           html:`
    <sxd-checkbox-group v-model="checkList2" min=1 max=2 :overstep="handleOverstep">
      <sxd-checkbox label="宝山区"></sxd-checkbox>
      <sxd-checkbox label="普陀区"></sxd-checkbox>
      <sxd-checkbox label="杨浦区"></sxd-checkbox>
      <sxd-checkbox label="浦东新区"></sxd-checkbox>
    </sxd-checkbox-group>
           `,
           javascript:`
    export default {
      data(){
        return {
          checkList2:["宝山区"],
        }
      },
      methods:{
        handleOverstep(tag,val){
          if(tag=='max'){
            this.$message({
              msg:"选中数量不能大于"+val,
              type:"warning"
            })
          }else{
            this.$message({
              msg:"选中数量不能小于"+val,
              type:"warning"
            })
          }
        }
      }
    }
            `
       }
      }
      
    },
    methods:{
      handleOverstep(tag,val){
        if(tag=='max'){
          this.$message({
            msg:"选中数量不能大于"+val,
            type:"warning"
          })
        }else{
          this.$message({
            msg:"选中数量不能小于"+val,
            type:"warning"
          })
        }
      }
    }
  };
</script>