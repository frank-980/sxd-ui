<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Tabs 标签页</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">分隔内容上有关联但属于不同类别的数据集合。</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code1" height="1175px">
      <template slot="source">
        <sxd-tabs v-model="activeName" :before-leave="beforeLeave" @tab-click="handleClick">
          <sxd-tab-pane label="首页信息" name="first">Content首页信息</sxd-tab-pane>
          <sxd-tab-pane label="配置管理" name="second">Content配置管理</sxd-tab-pane>
          <sxd-tab-pane label="用户管理" name="third">Content用户管理</sxd-tab-pane>
        </sxd-tabs> 
        <sxd-tabs v-model="activeName" type="card" :before-leave="beforeLeave" @tab-click="handleClick">
          <sxd-tab-pane label="首页信息" name="first">Content首页信息</sxd-tab-pane>
          <sxd-tab-pane label="配置管理" name="second">Content配置管理</sxd-tab-pane>
          <sxd-tab-pane label="用户管理" name="third">Content用户管理</sxd-tab-pane>
        </sxd-tabs>
        <sxd-tabs v-model="activeName" type="border-card" :before-leave="beforeLeave" @tab-click="handleClick">
          <sxd-tab-pane label="首页信息" name="first">Content首页信息</sxd-tab-pane>
          <sxd-tab-pane label="配置管理" name="second">Content配置管理</sxd-tab-pane>
          <sxd-tab-pane label="用户管理" name="third">Content用户管理</sxd-tab-pane>
        </sxd-tabs>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。
        </p>
      </template>
    </Block-code>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">tabs Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data1">
    </sxd-tablepro>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">tabs Events</p>
    <sxd-tablepro :columns="columns2" :data="data2">
    </sxd-tablepro>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Tab-pane Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data3">
    </sxd-tablepro>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName:"",
       data1:[
          {
            arguments: 'value / v-model',
            brief: "绑定值，选中选项卡的 name",
            type: 'string',
            options: '—',
            default:"第一个选项卡的 name"
          },
          {
            arguments: 'type',
            brief: "风格类型",
            type: 'string',
            options: 'card/border-card',
            default:"—"
          },
          {
            arguments: 'text-inside',
            brief: "进度条显示文字内置在进度条内",
            type: 'boolean',
            options: '—',
            default:"false"
          },
           {
            arguments: 'before-leave',
            brief: "切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。",
            type: 'Function(activeName, oldActiveName)',
            options: '—',
            default:"—"
          },
       ],
       data2:[
          {
            name: 'tab-click',
            brief: "tab 被选中时触发",
            params: '被选中的标签 tab 实例',
          },
       ],
       data3:[
          {
            arguments: 'label',
            brief: "选项卡标题",
            type: 'string',
            options: '—',
            default:"—"
          },
          {
            arguments: 'name',
            brief: "与选项卡绑定值 value 对应的标识符，表示选项卡别名",
            type: 'string',
            options: '—',
            default:"该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'"
          },
          {
            arguments: 'disabled',
            brief: "是否禁用",
            type: 'boolean',
            options: '—',
            default:"false"
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
    <sxd-tabs v-model="activeName" :before-leave="beforeLeave" @tab-click="Click">
      <sxd-tab-pane label="首页信息" name="first">Content首页信息</sxd-tab-pane>
      <sxd-tab-pane label="配置管理" name="second">Content配置管理</sxd-tab-pane>
      <sxd-tab-pane label="用户管理" name="third">Content用户管理</sxd-tab-pane>
    </sxd-tabs> 
    <sxd-tabs v-model="activeName" type="card" :before-leave="beforeLeave" @tab-click="Click">
      <sxd-tab-pane label="首页信息" name="first">Content首页信息</sxd-tab-pane>
      <sxd-tab-pane label="配置管理" name="second">Content配置管理</sxd-tab-pane>
      <sxd-tab-pane label="用户管理" name="third">Content用户管理</sxd-tab-pane>
    </sxd-tabs>
    <sxd-tabs v-model="activeName" type="border-card" :before-leave="beforeLeave" @tab-click="Click">
      <sxd-tab-pane label="首页信息" name="first">Content首页信息</sxd-tab-pane>
      <sxd-tab-pane label="配置管理" name="second">Content配置管理</sxd-tab-pane>
      <sxd-tab-pane label="用户管理" name="third">Content用户管理</sxd-tab-pane>
    </sxd-tabs>
           `,
           javascript:`
    export default {
      data () {
        return {
          activeName:"first",
        }
      },
      methods () {
        beforeLeave(activeName, oldActiveName){
          let a=1
          return new Promise((res,rej)=>{
            if(a==1){
              console.log("res:"+activeName+","+oldActiveName)
              res()
            }else{
              console.log("rej:"+activeName+","+oldActiveName)
              rej()
            }
          })
        },
        handleClick(node){
          console.log(node)
        },
      }
    }
        `
       },
    }
  },
  methods:{
      beforeLeave(activeName, oldActiveName){
        let a=1
        return new Promise((res,rej)=>{
          if(a==1){
            console.log("res:"+activeName+","+oldActiveName)
            res()
          }else{
            console.log("rej:"+activeName+","+oldActiveName)
            rej()
          }
        })
      },
      handleClick(node){
        console.log(node)
      },
  }
}
</script>

<style scoped>

</style>
