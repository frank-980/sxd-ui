<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Input 输入框</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">通过鼠标或键盘输入字符</p>
    <Block-code title="基础用法" :code="code" height="400px">
      <template slot="source">
        <sxd-input v-model="inputVal"/>
        <span v-if="inputVal" style="margin-left:70px">绑定值:{{inputVal}}</span>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          通过v-model绑定input框输入值，有值时样式不发生改变
        </p>
      </template>
    </Block-code>
    <!--<sxd-table :data="tableData">
      
        <sxd-tablecol colName="姓名" prop="name"></sxd-tablecol>
        <sxd-tablecol colName="年龄" prop="age"></sxd-tablecol>
        <sxd-tablecol colName="操作" >
          <template v-slot="slotProps">
            <button @click="slot(slotProps)">button slot</button>
          </template>
        </sxd-tablecol>

    </sxd-table>-->
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Input Attributes</p>
    <sxd-tablepro :columns="columns" :data="data">
      <template v-slot:name="{row}">
        {{row.name}}
      </template>
      <!--接收从（名字叫action）插槽里返回的数据-->
      <template v-slot:action="{row}">
        <sxd-button type="primary" @click="slot(row)">button slot</sxd-button>
      </template>
      
      <template v-slot:actiontwo="{index}">
        <sxd-button type="primary" @click="slot(index)">button2 slot</sxd-button>
      </template>
    </sxd-tablepro>

    <!--<sxd-switch a="from father">
      <template v-slot:head>
        <button>from head slot</button>
      </template>
      <template v-slot:body>
        <button>from body slot</button>
      </template>
      <template v-slot="slotProps">
        <button @click="slot(slotProps)">from foot slot{{slotProps.color}}</button>
      </template>
    </sxd-switch>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
       inputVal:"",
       is_loading:true,
       data:[
          {
            arguments: 'label',
            brief: "输入框占位文本",
            type: 'string',
            options: '—',
            default:"请输入"
          },
          {
            arguments: 'disabled',
            brief: "是否禁用",
            type: 'boolean',
            options: 'true/false',
            default:"false"
          },
          {
            arguments: 'clearable',
            brief: "是否可清空",
            type: 'boolean',
            options: 'true/false',
            default:"false"
          },
          {
            arguments: 'prefix-icon',
            brief: "输入框头部图标",
            type: 'string',
            options: '—',
            default:"—"
          },
          {
            arguments: 'prefix-icon',
            brief: "输入框尾部图标",
            type: 'string',
            options: '—',
            default:"—"
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
       code:{
           html:`
    <sxd-input v-model="inputVal" label="请输入"/>
           `,
           javascript:`
    export default {
      data () {
        return {
          inputVal:''
        }
      }
    }
            `
       }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
