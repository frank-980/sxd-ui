<template>
  <div id="app">
    <Block-code title="基础表格" :code="code1">
    <!--demo-->
      <template slot="source">
        <sxd-tablepro :columns="columns1" :data="data1">
        </sxd-tablepro>
      </template>
      <template slot="description">
    <!--简介-->
        <p style="font-size: 14px;color: #5e6d82">
          表格的简单用法，columns存放表头和绑定值，data里存放渲染的数据
        </p>
      </template>
    </Block-code>
    <Block-code title="自定义列模板" :code="code2">
    <!--demo-->
      <template slot="source">
        <sxd-tablepro :columns="columns2" :data="data2">
            <template v-slot:name="{row}">
                <strong>{{row.name}}</strong>
            </template>
            <!--接收从（名字叫action）插槽里返回的数据-->
            <template v-slot:operate="{row}">
                <sxd-button type="primary" @click="slot(row)">button slot</sxd-button>
            </template>
        </sxd-tablepro>
      </template>
      <template slot="description">
    <!--简介-->
        <p style="font-size: 14px;color: #5e6d82">
          VUE在 2.6.0 中，为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中
          <br>
          在 columns 的某列声明 slot 后，就可以在声明的 template 中使用插槽的作用域。
          <br>
          能访问到 slot 作用域的参数有 2 个：当前行数据 row，当前行序号 index。
        </p>
      </template>
    </Block-code>

    <!--属性-->
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
        columns1:[
            {
                title: 'Name',
                key: 'name'
            },
            {
                title: 'Age',
                key: 'age'
            },
            {
                title: 'Address',
                key: 'address'
            },
        ],
        data1: [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
            },
        ],
        columns2:[
            {
                title: 'Name',
                slot: 'name'
            },
            {
                title: 'Age',
                key: 'age'
            },
            {
                title: 'operate',
                slot: 'operate'
            },
        ],
        data2: [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
            },
        ],
      code1:{
           html:`
    <sxd-tablepro :columns="columns2" :data="data2">
        <template v-slot:name="{row}">
            <strong>{{row.name}}</strong>
        </template>
        <!--接收从（名字叫action）插槽里返回的数据-->
        <template v-slot:action="{row}">
            <sxd-button type="primary" @click="slot(row)">button slot</sxd-button>
        </template>
    </sxd-tablepro>
           `,
           javascript:`
    export default {
      data () {
        return {
            columns1:[
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                },
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
            ],
        }
            `
       },
       code2:{
           html:`
    <sxd-tablepro :columns="columns2" :data="data2">
        <template v-slot:name="{row}">
            <strong>{{row.name}}</strong>
        </template>
        <!--接收从（名字叫action）插槽里返回的数据-->
        <template v-slot:action="{row}">
            <sxd-button type="primary" @click="slot(row)">button slot</sxd-button>
        </template>
    </sxd-tablepro>
           `,
           javascript:`
    export default {
      data () {
        return {
            columns2:[
                {
                    title: 'Name',
                    slot: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'operate',
                    slot: 'operate'
                },
            ],
            data2: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
            ],
        }
            `
       }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
