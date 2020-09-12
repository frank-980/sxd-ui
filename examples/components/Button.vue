<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Button 按钮</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">常用的操作按钮</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code" height="300px">
      <template slot="source">
        <sxd-button class="demo-button" >默认按钮</sxd-button>
        <sxd-button class="demo-button" type="primary">主要按钮</sxd-button>
        <sxd-button class="demo-button" type="success">成功按钮</sxd-button>
        <sxd-button class="demo-button" type="danger">危险按钮</sxd-button>
        <br>
        <sxd-button class="demo-button" >默认按钮</sxd-button>
        <sxd-button class="demo-button" ghost type="primary">主要按钮</sxd-button>
        <sxd-button class="demo-button" ghost type="success">成功按钮</sxd-button>
        <sxd-button class="demo-button" ghost type="danger">危险按钮</sxd-button>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          使用type、size属性来定义 Button 的样式
        </p>
      </template>
    </Block-code>

<!--禁用状态-->
    <Block-code title="禁用状态" :code="code" height="300px">
      <template slot="source">
        <sxd-button class="demo-button" disabled>默认按钮</sxd-button>
        <sxd-button class="demo-button" disabled type="primary">主要按钮</sxd-button>
        <sxd-button class="demo-button" disabled type="success">成功按钮</sxd-button>
        <sxd-button class="demo-button" disabled type="danger">危险按钮</sxd-button>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。
        </p>
      </template>
    </Block-code>

<!--不同尺寸-->
    <Block-code title="不同尺寸" :code="code" height="300px">
      <template slot="source">
        <sxd-button class="demo-button" size="big" type="primary">默认按钮</sxd-button>
        <sxd-button class="demo-button" size="middle" type="primary">中等按钮</sxd-button>
        <sxd-button class="demo-button" size="small" type="primary">小型按钮</sxd-button>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          通过设置size属性来配置它们 ：big、middle、small
        </p>
      </template>
    </Block-code>

<!--加载中-->
    <Block-code title="加载中" :code="code" height="300px">
      <template slot="source">
        <sxd-button class="demo-button" loading=true type="primary">加载中按钮</sxd-button>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          要设置为 loading 状态，只要设置loading属性为true即可。 
        </p>
      </template>
    </Block-code>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Button Attributes</p>
    <sxd-tablepro :columns="columns" :data="data">
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
  .content{
    padding-top:50px
  }
  .demo-button{
    margin-left:15px;
  }
</style>
